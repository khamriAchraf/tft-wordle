import React, { createContext, useContext, useState, useMemo } from "react";
import units from "../data/units";
import { traits as traitData } from "../data/traits";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [team, setTeam] = useState([]);
  const [headliner, setHeadliner] = useState(null);
  // headliner shape: { unitId, traitId } or null

  const addUnit = (unit) => {
    if (team.length >= 12) return;
    if (!team.some((u) => u.id === unit.id)) {
      setTeam((prev) => [...prev, unit]);
    }
  };

  const removeUnit = (unit) => {
    setTeam((prev) => prev.filter((u) => u.id !== unit.id));
    if (headliner?.unitId === unit.id) {
      setHeadliner(null);
    }
  };

  const selectHeadliner = (unitId, traitId) => {
    // ensure unit is on board and has that trait
    const u = team.find((x) => x.id === unitId);
    if (!u || !u.traits.includes(traitId)) return;

    // toggle headliner: remove if clicking same, otherwise set new
    if (headliner?.unitId === unitId && headliner?.traitId === traitId) {
      setHeadliner(null);
    } else {
      setHeadliner({ unitId, traitId });
    }
  };

  const activeTraits = useMemo(() => {
    const counts = {};
    team.forEach((unit) =>
      unit.traits.forEach((t) => (counts[t] = (counts[t] || 0) + 1))
    );

    // apply headliner bonus
    if (headliner) {
      counts[headliner.traitId] = (counts[headliner.traitId] || 0) + 1;
    }

    // build final map
    return Object.entries(counts).reduce((acc, [id, count]) => {
      const def = traitData.find((t) => t.id === id);
      const name = def ? def.name : id;
      acc[id] = { name, count };
      return acc;
    }, {});
  }, [team, headliner]);

  return (
    <BoardContext.Provider
      value={{
        team,
        addUnit,
        removeUnit,
        activeTraits,
        units,
        headliner,
        selectHeadliner,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error("useBoard must be inside <BoardProvider>");
  return ctx;
}
