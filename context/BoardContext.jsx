// src/context/BoardContext.jsx
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import unitsRemix from '../data/remix-rumble/units';
import traitsRemix from '../data/remix-rumble/traits';
import unitsCyber from '../data/cybercity/units';
import traitsCyber from '../data/cybercity/traits';

const BoardContext = createContext();

export function BoardProvider({ setKey = '10', mode = 'daily', children }) {
  const units = setKey === '14' ? unitsCyber : unitsRemix;
  const traitData = setKey === '14' ? traitsCyber : traitsRemix;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dateKey = today.toISOString().slice(0, 10); // "2025-05-14"

  const [solvedToday, setSolvedToday] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(`${setKey}_solved_${dateKey}`) === 'true';
  });

  const [team, setTeam] = useState(() => {
    if (typeof window === 'undefined') return [];
    if (!solvedToday) return [];
    const raw = localStorage.getItem(`${setKey}_todayBoard_${dateKey}`);
    if (!raw) return [];
    try {
      const { teamIds } = JSON.parse(raw);
      return teamIds.map((id) => units.find((u) => u.id === id)).filter(Boolean);
    } catch {
      return [];
    }
  });
  const [headliner, setHeadliner] = useState(() => {
    if (typeof window === 'undefined') return null;
    if (!solvedToday) return null;
    const raw = localStorage.getItem(`${setKey}_todayBoard_${dateKey}`);
    if (!raw) return null;
    try {
      const { headliner } = JSON.parse(raw);
      return headliner;
    } catch {
      return null;
    }
  });
  const [mistakes, setMistakes] = useState(0);
  const [hardMode, setHardMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('hardMode') === 'true';
  });
  const toggleHardMode = (value) => setHardMode(value);






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

  const clearBoard = () => {
    setTeam([]);
    setMistakes(0);
    setHeadliner(null);
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
      const def = traitData?.find((t) => t.id === id);
      acc[id] = { name: def ? def.name : id, count };
      return acc;
    }, {});
  }, [team, headliner]);

  // whenever the board actually becomes “solved”, snap a copy to localStorage
  useEffect(() => {
    if (mode === 'daily' && solvedToday) {
      const payload = {
        teamIds: team.map((u) => u.id),
        headliner,
      };
      localStorage.setItem(`${setKey}_todayBoard_${dateKey}`, JSON.stringify(payload));
    }
  }, [solvedToday, dateKey]);

  // expose a way to mark “solved”
  const markSolved = () => {
    if (mode === 'daily') {
      localStorage.setItem(`${setKey}_solved_${dateKey}`, 'true');
      setSolvedToday(true);
    }
  };

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
        clearBoard,
        hardMode,
        toggleHardMode,
        solvedToday,
        markSolved,
        dateKey,
        setKey,
        mode,
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
