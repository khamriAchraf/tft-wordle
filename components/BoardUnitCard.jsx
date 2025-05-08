// src/components/BoardUnitCard.jsx
import React from "react";
import { useBoard } from "../context/BoardContext";
import styles from "@/styles/BoardUnitCard.module.css";
import { traits as traitData } from "../data/traits";

// Map cost to name-bar background color
const costColors = {
  1: "#192735",
  2: "#1d5229",
  3: "#1e4c71",
  4: "#950771",
  5: "#a46f28",
};

export default function BoardUnitCard({ unit }) {
  const { removeUnit, headliner, selectHeadliner } = useBoard();
  const { cost, name } = unit;
  const bgColor = costColors[cost] || "#000";
  // Full unit image filename in public folder
  const imgFilename = `images/units/TFT10_${name
    .replace(" ", "")
    .replace("'", "")}.TFT_Set10.png`;

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(/${imgFilename})`,
        border: `4px solid ${bgColor}`,
        borderBottom: "none",
      }}
      onClick={() => removeUnit(unit)}
    >
      {/* Trait icons overlay */}
      <div className={styles.traitOverlay}>
        {unit.traits.map((tid) => {
          const def = traitData.find((t) => t.id === tid);
          const traitName = def
            ? def.name
            : tid.charAt(0).toUpperCase() + tid.slice(1);
          const isHL =
            headliner?.unitId === unit.id && headliner.traitId === tid;

          return (
            <div className={styles.item}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundImage: `url(/images/traits/traitbg.png)` }}
              >
                <img
                  src={`/images/traits/${tid}.png`}
                  alt={name}
                  className={`${styles.traitIcon} ${
                    isHL ? styles.headliner : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectHeadliner(unit.id, tid);
                  }}
                />
              </div>
              <div className={styles.text}>
                <span className={styles.name}>{traitName}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Name bar */}
      <div className={styles.nameBar} style={{ backgroundColor: bgColor }}>
        {name}
      </div>
    </div>
  );
}
