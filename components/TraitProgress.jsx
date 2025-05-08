// src/components/TraitProgress.jsx
import React from 'react';
import { traits as traitData } from '../data/traits';
import styles from '@/styles/TraitProgress.module.css';

export default function TraitProgress({ id, name, target, current }) {
  const def = traitData.find((t) => t.id === id);
  const breakpoints = def?.breakpoints || [];
  const tiers = def?.tiers || [];

  // Determine tier index for icon background (reuse TraitItem logic)
  let tierIndex = -1;
  breakpoints.forEach((bp, idx) => {
    if (current >= bp) tierIndex = idx;
  });
  const tierName = tierIndex >= 0 ? tiers[tierIndex] : 'inactive';
  const bgUrl = `/images/traits/${tierName}.png`;

  // Fill percentage
  const pct = target > 0 ? Math.min((current / target) * 100, 100) : 0;

  return (
    <li className={styles.item}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img
          src={`/images/traits/${id}.png`}
          alt={name}
          className={styles.icon}
        />
      </div>

      <div className={styles.text}>
        <span className={styles.count}>{target}</span>
        <span className={styles.name}>{name}</span>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.fill}
            style={{ width: `${pct}%` }}
          />
          {breakpoints.map((bp, i) => (
            <span
              key={i}
              className={styles.tick}
              style={{ left: `${(bp / target) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className={styles.ratio}>
        {current}/{target}
      </div>
    </li>
  );
}