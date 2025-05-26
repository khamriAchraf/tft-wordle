// src/context/GameContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import compositions from '../data/remix-rumble/comps';
import { useBoard } from './BoardContext';
import unitsRemix from '../data/remix-rumble/units';
import traitsRemix from '../data/remix-rumble/traits';
import unitsCyber from '../data/cybercity/units';
import traitsCyber from '../data/cybercity/traits';

const GameContext = createContext();

export function GameProvider({ setKey = '10', children }) {
  const units = setKey === '14' ? unitsCyber : unitsRemix;
  const traitData = setKey === '14' ? traitsCyber : traitsRemix;
  console.log(units);
  // Determine today’s puzzle index based on fixed reference date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const reference = new Date(2025, 0, 1);
  const diff = today.getTime() - reference.getTime();
  const daysSince = Math.floor(diff / 86400000);
  const idx = ((daysSince % compositions.length) + compositions.length) % compositions.length;

  // Composition of the day (users share the same puzzle)
  const [composition, setComposition] = useState(() => compositions[idx]);

  // Optional manual overrides
  const pickCompositionById = (id) => {
    const comp = compositions.find((c) => c.id === id);
    if (comp) setComposition(comp);
  };
  const pickRandomComposition = () => {
    const rand = Math.floor(Math.random() * compositions.length);
    setComposition(compositions[rand]);
  };

  const { team, headliner } = useBoard();

  // Cost distribution for the target composition
  const costDistribution = useMemo(() => {
    const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    composition.units.forEach((unitId) => {
      const u = units.find((x) => x.id === unitId);
      if (u) dist[u.cost] += 1;
    });
    return dist;
  }, [composition]);

  // Check if board matches the daily composition
  const isSolved = useMemo(() => {
    if (team.length !== composition.units.length) return false;
    const targetIds = [...composition.units].sort();
    const boardIds = [...team.map((u) => u.id)].sort();
    if (targetIds.some((id, i) => id !== boardIds[i])) return false;
    if (composition.headliner) {
      if (
        !headliner ||
        headliner.unitId !== composition.headliner.unitId ||
        headliner.traitId !== composition.headliner.traitId
      ) {
        return false;
      }
    } else if (headliner) {
      return false;
    }
    return true;
  }, [team, headliner, composition]);

  // Active trait totals for the target composition
  const compositionActiveTraits = useMemo(() => {
    const counts = {};
    composition.units.forEach((unitId) => {
      console.log("zzzzzz", unitId);
      const u = units.find((x) => x.id === unitId);
      console.log("zzzzzz", unitId);
      u?.traits.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    if (composition.headliner) {
      counts[composition.headliner.traitId] =
        (counts[composition.headliner.traitId] || 0) + 1;
    }
    return Object.entries(counts).reduce((acc, [id, count]) => {
      const def = traitData?.find((t) => t.id === id);
      acc[id] = { name: def?.name || id, count };
      return acc;
    }, {});
  }, [composition]);

  return (
    <GameContext.Provider
      value={{
        composition,
        pickCompositionById,
        pickRandomComposition,
        costDistribution,
        isSolved,
        compositions,
        compositionActiveTraits,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within a GameProvider');
  return ctx;
}
