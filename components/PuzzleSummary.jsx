// src/components/PuzzleSummary.jsx
import React from 'react';
import { usePuzzle } from '../context/PuzzleContext';
import { useBoard } from '../context/BoardContext';
import styles from '@/styles/PuzzleSummary.module.css';

export default function PuzzleSummary() {
  const { targetTraits, costCounts, mistakes } = usePuzzle();
  const { team } = useBoard();

  // Compute current trait counts
  const currentTraitCounts = team.reduce((acc, unit) => {
    unit.traits.forEach((t) => (acc[t] = (acc[t] || 0) + 1));
    return acc;
  }, {});

  // Compute current cost counts
  const currentCostCounts = Array.from({ length: 5 }, (_, i) =>
    team.filter((u) => u.cost === i + 1).length
  );

  return (
    <div className={styles.summary}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Traits</h2>
        {targetTraits.map(({ id, name, target }) => {
          const current = currentTraitCounts[id] || 0;
          const pct = target > 0 ? (current / target) * 100 : 0;
          return (
            <div key={id} className={styles.item}>
              <img
                src={`/images/traits/${id}.png`}
                alt={name}
                className={styles.icon}
              />
              <div className={styles.label}>{name}</div>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className={styles.count}>{current}/{target}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>Costs</h2>
        {costCounts.map((target, i) => {
          const current = currentCostCounts[i];
          const pct = target > 0 ? (current / target) * 100 : 0;
          return (
            <div key={i} className={styles.item}>
              <div className={styles.label}>Cost {i + 1}</div>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className={styles.count}>{current}/{target}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.mistakes}>
        Mistakes: {mistakes}
      </div>
    </div>
  );
}
