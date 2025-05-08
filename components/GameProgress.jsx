// src/components/GameProgress.jsx
import React from 'react';
import { useGame } from '../context/GameContext';
import { useBoard } from '../context/BoardContext';
import styles from '@/styles/GameProgress.module.css';

export default function GameProgress() {
  const { compositionActiveTraits } = useGame();
  const { activeTraits } = useBoard();

  // Build an array of { id, name, target, current }
  const entries = Object.entries(compositionActiveTraits).map(
    ([id, { name, count: target }]) => ({
      id,
      name,
      target,
      current: activeTraits[id]?.count || 0,
    })
  );

  // Sort by descending target, then alpha
  entries.sort((a, b) => {
    if (b.target !== a.target) return b.target - a.target;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className={styles.panel}>
      {entries.map(({ id, name, target, current }) => {
        const pct = target > 0 ? Math.min((current / target) * 100, 100) : 0;
        return (
          <div key={id} className={styles.item}>
            <img
              src={`/images/traits/${id}.png`}
              alt={name}
              className={styles.icon}
            />
            <div className={styles.label}>{target} {name}</div>
            <div className={styles.barContainer}>
              <div
                className={styles.barFill}
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className={styles.ratio}>
              {current}/{target}
            </div>
          </div>
        );
      })}
    </div>
  );
}
