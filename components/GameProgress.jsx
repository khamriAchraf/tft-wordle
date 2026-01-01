// src/components/GameProgress.jsx
import React from "react";
import { useGame } from "../context/GameContext";
import { useBoard } from "../context/BoardContext";
import TraitProgress from "./TraitProgress";
import traitsRemix from "../data/remix-rumble/traits";
import traitsCyber from "../data/cybercity/traits";
import traitsKo from "../data/ko-coliseum/traits";
import  traitsLl from "../data/lore-and-legends/traits";
import remixStyles from "@/styles/GameProgress.module.css";
import cyberStyles from "@/styles/cybercity/GameProgress.module.css";
import koStyles from "@/styles/ko-coliseum/GameProgress.module.css";
import llStyles from "@/styles/lore-and-legends/GameProgress.module.css";

const tierOrder = {
  prismatic: 0,
  gold: 1,
  unique: 2,
  silver: 3,
  bronze: 4,
  inactive: 5,
};

const costColors = {
  1: "#acacac",
  2: "#22c55e",
  3: "#0090ff",
  4: "#a855f7",
  5: "#eab308",
  7: "#0d2d55",
};

export default function GameProgress() {
  const { compositionActiveTraits, costDistribution, setKey } = useGame();
  let traitData;
  let styles;
  if (setKey === "14") {
    styles = cyberStyles;
    traitData = traitsCyber;
  } else if (setKey === "15") {
    styles = koStyles;
    traitData = traitsKo;
  } else if (setKey === "16") {
    styles = llStyles;
    traitData = traitsLl;
  } else {
    styles = remixStyles;
    traitData = traitsRemix;
  }
  const { activeTraits, team } = useBoard();

  // Combine composition traits and any extra active traits
  const allIds = new Set([
    ...Object.keys(compositionActiveTraits),
    ...Object.keys(activeTraits),
  ]);

  const entries = Array.from(allIds)
    .map((id) => {
      const comp = compositionActiveTraits[id] || {
        name: traitData.find((t) => t.id === id)?.name || id,
        count: 0,
      };
      const curr = activeTraits[id]?.count || 0;
      // Determine tierName as before, based on comp.count
      const def = traitData.find((t) => t.id === id);
      const breakpoints = def?.breakpoints || [];
      let tierIndex = -1;
      breakpoints.forEach((bp, idx) => {
        if (comp.count >= bp) tierIndex = idx;
      });
      const tierName = tierIndex >= 0 ? def.tiers[tierIndex] : "inactive";
      return {
        id,
        name: comp.name,
        target: comp.count,
        current: curr,
        tierName,
        isExtra: comp.count === 0,
      };
    })
    .sort((a, b) => {
      // extras last
      if (a.isExtra !== b.isExtra) return a.isExtra ? 1 : -1;
      const tierDiff = tierOrder[a.tierName] - tierOrder[b.tierName];
      if (tierDiff !== 0) return tierDiff;
      if (b.target !== a.target) return b.target - a.target;
      return a.name.localeCompare(b.name);
    });

  const costs = [1, 2, 3, 4, 5];

  // Compute board cost distribution
  const boardCostDist = team.reduce((acc, u) => {
    acc[u.cost] = (acc[u.cost] || 0) + 1;
    return acc;
  }, {});

  const supportedCosts = setKey=='16' ? [1,2,3,4,5,7] : [1,2,3,4,5]

  return (
    <div className={styles.gameContainer}>
      <div className={styles.grid}>
        {entries.map(({ id, name, target, current, isExtra }) => (
          <TraitProgress
            key={id}
            id={id}
            name={traitData.find((t) => t.id === id)?.name}
            target={target}
            current={current}
            dimmed={isExtra}
            setKey={setKey}
          />
        ))}
      </div>
      {/* Cost Distribution */}
      <div className={styles.costGridParent}>
        <div className={styles.costGrid}>
          {supportedCosts.map((cost) => (
            <div
              key={cost}
              className={styles.costItem}
              style={{
                borderColor: costColors[cost],
                opacity: costDistribution[cost] ? 1 : 0.3,
                backgroundColor:
                  setKey !== "15" ? costColors[cost] : "transparent",
              }}
            >
              <span className={styles.costLabel}>
                <img
                  src={`/images/gold.png`}
                  alt="Gold"
                  className={styles.goldIcon}
                />{" "}
                {cost}
              </span>
              <span className={styles.costRatio}>
                {boardCostDist[cost] || 0}/{costDistribution[cost] || 0}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
