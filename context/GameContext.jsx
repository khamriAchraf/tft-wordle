// src/context/GameContext.jsx
import React, { createContext, useContext, useState, useMemo } from "react";
import unitsRemix from "../data/remix-rumble/units";
import traitsRemix from "../data/remix-rumble/traits";
import compsRemix from "../data/remix-rumble/comps";
import unitsCyber from "../data/cybercity/units";
import traitsCyber from "../data/cybercity/traits";
import compsCyber from "../data/cybercity/comps";
import unitsKo from "../data/ko-coliseum/units";
import traitsKo from "../data/ko-coliseum/traits";
import compsKo from "../data/ko-coliseum/comps";
import { useBoard } from "./BoardContext";

const GameContext = createContext();

export function GameProvider({ setKey, mode, children }) {
  let units = [];
  let traitData = [];
  let comps = [];
  if (setKey === "14") {
    units = unitsCyber;
    traitData = traitsCyber;
    comps = compsCyber;
  } else if (setKey === "10") {
    units = unitsRemix;
    traitData = traitsRemix;
    comps = compsRemix;
  } else if (setKey === "15") {
    units = unitsKo;
    traitData = traitsKo;
    comps = compsKo;
  }
  // pull in current board state
  const { team, headliner, clearBoard } = useBoard();

  const getRandomComp = () => comps[Math.floor(Math.random() * comps.length)];

  // choose initial composition
  const [composition, setComposition] = useState(() => {
    if (mode === "endless") {
      clearBoard();
      return getRandomComp();
    }
    // daily mode: one puzzle per day
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const reference = new Date(2025, 0, 1);
    const daysSince = Math.floor(
      (today.getTime() - reference.getTime()) / 86400000
    );
    const idx = ((daysSince % comps.length) + comps.length) % comps.length;
    return comps[idx];
  });

  // manual overrides still available
  const pickCompositionById = (id) => {
    const comp = comps.find((c) => c.id === id);
    if (comp) setComposition(comp);
  };
  const pickRandomComposition = () => {
    const available = comps.filter((c) => c.id !== composition.id);
    if (available.length === 0) return;
    const next = available[Math.floor(Math.random() * available.length)];
    setComposition(next);
  };

  // build cost distribution of target
  const costDistribution = useMemo(() => {
    const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    composition.units.forEach((uid) => {
      const u = units.find((x) => x.id === uid);
      if (u) dist[u.cost] += 1;
    });
    return dist;
  }, [composition, units]);

  // solved check
  const isSolved = useMemo(() => {
    if (team.length !== composition.units.length) return false;
    const targetIds = [...composition.units].sort();
    const boardIds = [...team.map((u) => u.id)].sort();
    if (targetIds.some((id, i) => id !== boardIds[i])) return false;
    // only enforce headliner in set 10
    if (composition.headliner) {
      return (
        headliner &&
        headliner.unitId === composition.headliner.unitId &&
        headliner.traitId === composition.headliner.traitId
      );
    } else if (headliner) {
      return false;
    }
    return true;
  }, [team, headliner, composition]);

  // target trait totals
  const compositionActiveTraits = useMemo(() => {
    const counts = {};
    composition.units.forEach((uid) => {
      const u = units.find((x) => x.id === uid);
      u.traits.forEach((t) => (counts[t] = (counts[t] || 0) + 1));
    });
    // headliner bonus only for set 10
    if (setKey === "10" && composition.headliner) {
      const t = composition.headliner.traitId;
      counts[t] = (counts[t] || 0) + 1;
    }
    return Object.entries(counts).reduce((acc, [id, count]) => {
      const def = traitData?.find((t) => t.id === id);
      acc[id] = { name: def?.name || id, count };
      return acc;
    }, {});
  }, [composition, traitData, units, setKey]);

  return (
    <GameContext.Provider
      value={{
        // core
        composition,
        costDistribution,
        isSolved,
        compositionActiveTraits,
        setKey,
        mode,
        compositions: comps,
        // actions
        pickCompositionById,
        pickRandomComposition,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return ctx;
}
