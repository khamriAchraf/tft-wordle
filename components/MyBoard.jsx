// src/components/MyBoard.jsx
import React from 'react';
import { useBoard } from '../context/BoardContext';
import BoardUnitCard from './BoardUnitCard';
import styles from '@/styles/MyBoard.module.css';

export default function MyBoard() {
  const { team, removeUnit } = useBoard();

  // Create an array of 12 slots, filling with team units or null
  const slots = Array.from({ length: 12 }, (_, i) => team[i] || null);

  return (
    <div className={styles.board}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Your Team</h1>
        <button
          className={styles.clear}
          onClick={() => team.forEach(removeUnit)}
        >
          Clear All
        </button>
      </div>

      <div className={styles.grid}>
        {slots.map((unit, idx) => (
          <div key={idx} className={styles.slot}>
            {unit ? (
              <BoardUnitCard unit={unit} />
            ) : (
              <div className={styles.placeholder}>
                <img src="/images/helmet.png" alt="Gold" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
