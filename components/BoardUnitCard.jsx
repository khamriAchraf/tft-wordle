// src/components/BoardUnitCard.jsx
import React from "react";
import { useBoard } from "../context/BoardContext";
import remixStyles from "@/styles/BoardUnitCard.module.css";
import cyberStyles from "@/styles/cybercity/BoardUnitCard.module.css";
import { traits as traitData } from "../data/remix-rumble/traits";
import { useGame } from "../context/GameContext";

// Map cost to name-bar background color
const costColors = {
  1: "#192735",
  2: "#1d5229",
  3: "#1e4c71",
  4: "#950771",
  5: "#a46f28",
};

export default function BoardUnitCard({ unit }) {
  const { removeUnit, headliner, selectHeadliner, setKey } = useBoard();
  const styles = setKey === '14' ? cyberStyles : remixStyles;
  const { composition } = useGame();
  const { cost, name } = unit;
  const bgColor = costColors[cost] || "#000";
  // Full unit image filename in public folder
  const imgFilename = `images/units/TFT${setKey}_${name
    .replace(" ", "")
    .replace("'", "")}.TFT_Set${setKey}.png`;

  return (
    <div
      className={`${styles.card} ${headliner?.unitId === unit.id ? styles.headliner : ""
        }`}
      style={{
        backgroundImage: `url(/${imgFilename})`,
        border: `4px solid ${bgColor}`,
        borderBottom: "none",
      }}
    >
      <img
        src={`/images/delete.png`}
        alt={name}
        className={`${styles.deleteIcon}`}
        style={{ backgroundColor: bgColor }}
        onClick={(e) => {
          e.stopPropagation();
          removeUnit(unit);
        }}
      />

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
            <div
              className={styles.item}
              onClick={(e) => {
                e.stopPropagation();
                selectHeadliner(unit.id, tid);
              }}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundImage: `url(/images/traits/${isHL ? 'headliner' : 'traitbg'}.png)` }}
              >
                <img
                  src={`/images/traits/set${setKey}/${tid}.png`}
                  alt={name}
                  className={`${styles.traitIcon}
                    }`}
                />
              </div>
              <div className={styles.text}>
                <span>{traitName}</span>
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
