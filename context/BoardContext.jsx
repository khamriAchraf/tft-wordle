// src/context/BoardContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import units from '../data/units';
import { traits as traitData } from '../data/traits';

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [team, setTeam] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [headliner, setHeadliner] = useState(null);

  const addUnit = (unit) => {
    if (team.length >= 12) return;
    if (!team.some((u) => u.id === unit.id)) {
      setTeam((prev) => [...prev, unit]);
    }
  };

  const removeUnit = (unit) => {
    // **increment mistakes here**, no GameContext needed
    setMistakes((prev) => prev + 1);
    setTeam((prev) => prev.filter((u) => u.id !== unit.id));
    if (headliner?.unitId === unit.id) {
      setHeadliner(null);
    }
  };

  const resetMistakes = () => setMistakes(0);

  const selectHeadliner = (unitId, traitId) => {
    const u = team.find((x) => x.id === unitId);
    if (!u || !u.traits.includes(traitId)) return;
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
    if (headliner) {
      counts[headliner.traitId] = (counts[headliner.traitId] || 0) + 1;
    }
    return Object.entries(counts).reduce((acc, [id, count]) => {
      const def = traitData.find((t) => t.id === id);
      acc[id] = { name: def ? def.name : id, count };
      return acc;
    }, {});
  }, [team, headliner]);

  return (
    <BoardContext.Provider
      value={{
        team,
        mistakes,
        resetMistakes,
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
  if (!ctx) throw new Error('useBoard must be inside <BoardProvider>');
  return ctx;
}
