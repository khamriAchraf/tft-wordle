// src/context/BoardContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import units from '../data/units';
import { traits as traitData } from '../data/traits';

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [team, setTeam] = useState([]);

  const addUnit = (unit) => {
    if (team.length >= 12) return;
    if (!team.some((u) => u.id === unit.id)) {
      setTeam((prev) => [...prev, unit]);
    }
  };

  const removeUnit = (unit) => {
    setTeam((prev) => prev.filter((u) => u.id !== unit.id));
  };

  const activeTraits = useMemo(() => {
    const counts = {};
    team.forEach((unit) => {
      unit.traits.forEach((traitId) => {
        counts[traitId] = (counts[traitId] || 0) + 1;
      });
    });

    const actives = {};
    Object.entries(counts).forEach(([traitId, count]) => {
      const def = traitData.find((t) => t.id === traitId);
      const name = def ? def.name : traitId.charAt(0).toUpperCase() + traitId.slice(1);
      actives[traitId] = { name, count };
    });

    return actives;
  }, [team]);

  return (
    <BoardContext.Provider value={{ team, addUnit, removeUnit, activeTraits, units }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
}
