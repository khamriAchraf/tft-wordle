// src/context/PuzzleContext.jsx
import React, { createContext, useContext, useState, useMemo, useRef, useEffect } from 'react';
import { comps } from '../data/comps';
import units from '../data/units';
import { traits as traitData } from '../data/traits';
import { useBoard } from './BoardContext';

const PuzzleContext = createContext();

export function PuzzleProvider({ children }) {
  // Random puzzle on mount
  const [targetIds] = useState(
    comps[Math.floor(Math.random() * comps.length)]
  );
  const { team } = useBoard();

  // Resolve target units
  const targetUnits = useMemo(
    () => units.filter((u) => targetIds.includes(u.id)),
    [targetIds]
  );

  // Compute target trait counts
  const targetTraits = useMemo(() => {
    const counts = {};
    targetUnits.forEach((u) =>
      u.traits.forEach((t) => (counts[t] = (counts[t] || 0) + 1))
    );
    return Object.entries(counts).map(([id, count]) => {
      const def = traitData.find((t) => t.id === id);
      return { id, name: def ? def.name : id, target: count };
    });
  }, [targetUnits]);

  // Compute target cost counts
  const costCounts = useMemo(() => {
    const counts = {};
    targetUnits.forEach((u) => (counts[u.cost] = (counts[u.cost] || 0) + 1));
    return Array.from({ length: 5 }, (_, i) => counts[i + 1] || 0);
  }, [targetUnits]);

  // Track mistakes when user removes units
  const prevTeamLen = useRef(team.length);
  const [mistakes, setMistakes] = useState(0);
  useEffect(() => {
    const diff = prevTeamLen.current - team.length;
    if (diff > 0) setMistakes((m) => m + diff);
    prevTeamLen.current = team.length;
  }, [team]);

  return (
    <PuzzleContext.Provider
      value={{ targetUnits, targetTraits, costCounts, mistakes }}
    >
      {children}
    </PuzzleContext.Provider>
  );
}

export function usePuzzle() {
  const context = useContext(PuzzleContext);
  if (!context) throw new Error('usePuzzle must be used within PuzzleProvider');
  return context;
}