import React, { createContext, useContext, useState, useMemo } from 'react';
import { comps } from '../data/comps';
import units from '../data/units';
import { traits as traitData } from '../data/traits';

const PuzzleContext = createContext();

export function PuzzleProvider({ children }) {
  // Pick a random puzzle on init
  const [targetIds] = useState(
    comps[Math.floor(Math.random() * comps.length)]
  );

  // Resolve unit objects
  const targetUnits = useMemo(
    () => units.filter((u) => targetIds.includes(u.id)),
    [targetIds]
  );

  // Compute active traits
  const activeTraits = useMemo(() => {
    const counts = {};
    targetUnits.forEach((u) =>
      u.traits.forEach((tid) => (counts[tid] = (counts[tid] || 0) + 1))
    );
    return Object.entries(counts).map(([id, count]) => {
      const def = traitData.find((t) => t.id === id);
      return { id, name: def ? def.name : id, count };
    });
  }, [targetUnits]);

  // Compute cost tier counts
  const costCounts = useMemo(() => {
    const counts = {};
    targetUnits.forEach((u) => (counts[u.cost] = (counts[u.cost] || 0) + 1));
    return Array.from({ length: 5 }, (_, i) => counts[i + 1] || 0);
  }, [targetUnits]);

  return (
    <PuzzleContext.Provider value={{ targetUnits, activeTraits, costCounts }}>
      {children}
    </PuzzleContext.Provider>
  );
}

export function usePuzzle() {
  const ctx = useContext(PuzzleContext);
  if (!ctx) throw new Error('usePuzzle must be used inside PuzzleProvider');
  return ctx;
}