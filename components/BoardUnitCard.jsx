// src/components/BoardUnitCard.jsx
import React from 'react';
import { useBoard } from '../context/BoardContext';
import styles from '@/styles/BoardUnitCard.module.css';

// Map cost to name-bar background color
const costColors = {
  1: '#acacac',
  2: '#22c55e',
  3: '#0090ff',
  4: '#a855f7',
  5: '#eab308',
};

export default function BoardUnitCard({ unit }) {
  const { removeUnit } = useBoard();
  const { cost, name } = unit;
  const bgColor = costColors[cost] || '#000';
  // Full unit image filename in public folder
  const imgFilename = `images/units/TFT10_${name}.TFT_Set10.png`;

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(/${imgFilename})` }}
      onClick={() => removeUnit(unit)}
    >
      {/* Trait icons overlay */}
      <div className={styles.traitOverlay}>
        {unit.traits.map((tid) => (
          <img
            key={tid}
            src={`/images/traits/${tid}.png`}
            alt={tid}
            className={styles.traitIcon}
          />
        ))}
      </div>

      {/* Name bar */}
      <div
        className={styles.nameBar}
        style={{ backgroundColor: bgColor }}
      >
        {name}
      </div>
    </div>
  );
}
