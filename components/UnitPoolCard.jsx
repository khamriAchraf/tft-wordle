// src/components/UnitPoolCard.jsx
import React, { useEffect } from "react";
import { useBoard } from "../context/BoardContext";
import remixStyles from "@/styles/UnitPoolCard.module.css";
import cyberStyles from "@/styles/cybercity/UnitPoolCard.module.css";
import koStyles from "@/styles/ko-coliseum/UnitPoolCard.module.css";
import llStyles from "@/styles/lore-and-legends/UnitPoolCard.module.css";

const costBorderColors = {
  1: "#acacac",
  2: "#22c55e",
  3: "#0090ff",
  4: "#a855f7",
  5: "#eab308",
  7: "#0d2d55",
};

export default function UnitPoolCard({ unit }) {
  const { team, addUnit, removeUnit, hardMode, setKey } = useBoard();
  let styles;
  if (setKey === "14") {
    styles = cyberStyles;
  } else if (setKey === "15") {
    styles = koStyles;
  } else if (setKey === "16") {
    styles = llStyles;
  } else {
    styles = remixStyles;
  }
  const selected = team.some((u) => u.id === unit.id);

  const handleClick = () => {
    selected ? removeUnit(unit) : addUnit(unit);
  };

  const borderColor = costBorderColors[unit.cost] || "#000";

  const formatUnitName = (name) => {
    if (name.includes("KaiSa")) return "Kaisa";
    if (name.includes("KaiSa_TrueDamage")) return "KaisaTrueDamage";
    if (name.includes("AkaliKDA")) return "Akali";
    if (name.includes("AkaliKDA_TrueDamage")) return "AkaliTrueDamage";
    if (setKey === "15" && name.includes("Jarvan IV")) return "jarvaniv";
    if (setKey === "15" && name.includes("Rammus")) return "rammuspb";
    if (name.includes("Jarvan IV")) return "jarvan";
    if (name.includes("Nidalee")) return "nidaleecougar";
    return name
      .toLowerCase()
      .replace(" ", "")
      .replace("'", "")
      .replace(".", "");
  };

  const buildImgSource = () => {
    if (setKey === "15") {
      let url = `https://raw.communitydragon.org/pbe/game/assets/characters/tft15_${formatUnitName(
        unit.name
      )}/hud/tft15_${formatUnitName(unit.name)}_square.tft_set15.png`;
      return url;
    }
    if (setKey === "16") {
      let url = `/images/units/squares/TFT${setKey}_${unit.name
        .replace(" ", "")
        .replace(" ", "")
        .replace("'", "")}.TFT_Set${setKey}.webp`;
      return url;
    }
    return `https://raw.communitydragon.org/${
      setKey === "14" ? "pbe" : "latest"
    }/game/assets/characters/tft${setKey}_${formatUnitName(
      unit.name
    )}/hud/tft${setKey}_${formatUnitName(unit.name)}_square${
      setKey === "14" ? ".tft_set14" : ""
    }.png`;
  };

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
        <img src={buildImgSource()} className={styles.sprite} alt="" />
        {unit.unlockable && (
          <img
            src={`/images/unlock.svg`}
            alt="unlock icon"
            className={styles.unlockIcon}
          />
        )}
      </div>

      {/* Trait icons */}
      {!hardMode && (
        <div className={styles.traits}>
          {unit.traits.map((tid) => (
            <img
              key={tid}
              src={`/images/traits/set${setKey}/${tid}${
                setKey === "15" ? ".svg" : ".png"
              }`}
              alt={tid}
              className={styles.traitIcon}
            />
          ))}
        </div>
      )}

      {/* Unit name */}
      <div className={styles.unitName}>{unit.name}</div>
    </div>
  );
}
