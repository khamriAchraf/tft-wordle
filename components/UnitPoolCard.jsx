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
  const { team, addUnit, removeUnit, hardMode, setKey } = useBoard();
  const selected = team.some((u) => u.id === unit.id);

  const handleClick = () => {
    selected ? removeUnit(unit) : addUnit(unit);
  };


  const borderColor = costBorderColors[unit.cost] || "#000";

  const formatUnitName = (name) => {
    return name.replace(' ', '').replace("'", '').replace('KaiSa', 'Kaisa').replace('Akali', 'AkaliKDA').replace('AkaliKDA_TrueDamage', 'AkaliTrueDamage').toLowerCase();
  }

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
          src={`https://raw.communitydragon.org/${setKey === "14" ? 'pbe' : 'latest' }/game/assets/characters/tft${setKey}_${formatUnitName(unit.name)}/hud/tft${setKey}_${formatUnitName(unit.name)}_square${setKey === '14' ? '.tft_set14' : ''}.png`}
          className={styles.sprite}
          alt=""
        />
      </div>

      {/* Trait icons */}
      {!hardMode && <div className={styles.traits}>
        {unit.traits.map((tid) => (
          <img
            key={tid}
            src={`/images/traits/set${setKey}/${tid}.png`}
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
