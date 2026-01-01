// src/components/BoardUnitCard.jsx
import React from "react";
import { useBoard } from "../context/BoardContext";
import remixStyles from "@/styles/BoardUnitCard.module.css";
import cyberStyles from "@/styles/cybercity/BoardUnitCard.module.css";
import koStyles from "@/styles/ko-coliseum/BoardUnitCard.module.css";
import llStyles from "@/styles/lore-and-legends/BoardUnitCard.module.css";
import { traits as traitData } from "../data/remix-rumble/traits";
import { useGame } from "../context/GameContext";

// Map cost to name-bar background color
const costColors = {
  1: "#acacac",
  2: "#22c55e",
  3: "#0090ff",
  4: "#a855f7",
  5: "#eab308",
  7: "#0d2d55",
};

export default function BoardUnitCard({ unit }) {
  const { removeUnit, headliner, selectHeadliner, setKey } = useBoard();
  let styles;
  if (setKey === '14') {
    styles = cyberStyles;
  } else if (setKey === '15') {
    styles = koStyles;
  } else if (setKey === '16') {
    styles = llStyles;
  } else {
    styles = remixStyles;
  }
  const { composition } = useGame();
  const { cost, name } = unit;
  const bgColor = costColors[cost] || "#000";
  // Full unit image filename in public folder
  const imgFilename = `images/units/TFT${setKey}_${name
    .replace(" ", "").replace(" ","")
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
                  src={`/images/traits/set${setKey}/${tid}${setKey==="15"? ".svg" : ".png"}`}
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
