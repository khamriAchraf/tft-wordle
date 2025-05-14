// src/components/UnitPoolCard.jsx
import React, { useEffect } from "react";
import { useBoard } from "../context/BoardContext";
import styles from "@/styles/UnitPoolCard.module.css";

const costBorderColors = {
  1: "#acacac",
  2: "#22c55e",
  3: "#0090ff",
  4: "#a855f7",
  5: "#eab308",
};

export default function UnitPoolCard({ unit }) {
  const { team, addUnit, removeUnit, hardMode } = useBoard();
  const selected = team.some((u) => u.id === unit.id);

  const handleClick = () => {
    selected ? removeUnit(unit) : addUnit(unit);
  };

  const { sprite, x, y, w, h } = unit.image;

  const borderColor = costBorderColors[unit.cost] || "#000";
  // TODO : Get image from https://rerollcdn.com/characters/Skin/10/AkaliTrueDamage.png

  const formatUnitName = (name) => {
    return name.replace(' ', '').replace("'", '').replace('KaiSa', 'Kaisa').replace('Akali', 'AkaliKDA').replace('AkaliKDA_TrueDamage', 'AkaliTrueDamage');
  }

  useEffect(() => {
    const saved = localStorage.getItem('hardMode') === 'true';
  }, []);

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      {/* Sprite icon */}
      <div
        className={styles.spriteWrapper}
        style={{
          border: `2px solid ${borderColor}`,
        }}
      >
        <img
          src={`https://rerollcdn.com/characters/Skin/10/${formatUnitName(unit.name)}.png`}
          className={styles.sprite}
          alt=""
        />
      </div>

      {/* Trait icons */}
      {!hardMode && <div className={styles.traits}>
        {unit.traits.map((tid) => (
          <img
            key={tid}
            src={`/images/traits/${tid}.png`}
            alt={tid}
            className={styles.traitIcon}
          />
        ))}
      </div>}


      {/* Unit name */}
      <div className={styles.unitName}>{unit.name}</div>
    </div>
  );
}
