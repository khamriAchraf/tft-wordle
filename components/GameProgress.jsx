// src/components/GameProgress.jsx
import React from 'react';
import { useGame } from '../context/GameContext';
import { useBoard } from '../context/BoardContext';
import TraitProgress from './TraitProgress';
import { traits as traitData } from '../data/traits';
import styles from '@/styles/GameProgress.module.css';

const tierOrder = {
  prismatic: 0,
  gold: 1,
  unique: 2,
  silver: 3,
  bronze: 4,
  inactive: 5,
};

export default function GameProgress() {
  const { compositionActiveTraits } = useGame();
  const { activeTraits } = useBoard();

  // Build and sort entries using the same logic as TraitPanel
  const entries = Object.entries(compositionActiveTraits)
    .map(([id, { name, count: target }]) => {
      const def = traitData.find((t) => t.id === id);
      const breakpoints = def?.breakpoints || [];
      let tierIndex = -1;
      breakpoints.forEach((bp, idx) => {
        if (target >= bp) tierIndex = idx;
      });
      const tierName = tierIndex >= 0 ? def.tiers[tierIndex] : 'inactive';
      const current = activeTraits[id]?.count || 0;
      return { id, name, target, current, tierName };
    })
    .sort((a, b) => {
      const tierDiff = tierOrder[a.tierName] - tierOrder[b.tierName];
      if (tierDiff !== 0) return tierDiff;
      if (b.target !== a.target) return b.target - a.target;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className={styles.grid}>
      {entries.map(({ id, name, target, current }) => (
        <TraitProgress
          key={id}
          id={id}
          name={name}
          target={target}
          current={current}
        />
      ))}
    </div>
  );
}
