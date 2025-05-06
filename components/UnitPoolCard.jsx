// src/components/UnitPoolCard.jsx
import React from 'react';
import { useBoard } from '../context/BoardContext';
import styles from '@/styles/UnitPoolCard.module.css';

const costBorderColors = {
    1: '#acacac',
    2: '#22c55e',
    3: '#0090ff',
    4: '#a855f7',
    5: '#eab308',
};

export default function UnitPoolCard({ unit }) {
    const { team, addUnit, removeUnit } = useBoard();
    const selected = team.some((u) => u.id === unit.id);

    const handleClick = () => {
        selected ? removeUnit(unit) : addUnit(unit);
    };

    const { sprite, x, y, w, h } = unit.image;

    const borderColor = costBorderColors[unit.cost] || '#000';
    // TODO : Get image from https://rerollcdn.com/characters/Skin/10/AkaliTrueDamage.png

    return (
        <div
            className={`${styles.card} ${selected ? styles.selected : ''}`}
            onClick={handleClick}
        >
            {/* Sprite icon */}
            <div
                className={styles.spriteWrapper}
                style={{
                    border: `2px solid ${borderColor}`,
                    width: `${w+4}px`,
                    height: `${h+4}px`,
                }}
            >
                <div
                    className={styles.sprite}
                    style={{
                        backgroundImage: `url(/images/sprites/${sprite})`,
                        backgroundPosition: `-${x}px -${y}px`,
                        width: `${w}px`,
                        height: `${h}px`,
                    }}
                />
            </div>

            {/* Trait icons */}
            <div className={styles.traits}>
                {unit.traits.map((tid) => (
                    <img
                        key={tid}
                        src={`/images/traits/${tid}.png`}
                        alt={tid}
                        className={styles.traitIcon}
                    />
                ))}
            </div>

            {/* Unit name */}
            <div className={styles.unitName}>{unit.name}</div>
        </div>
    );
}
