// src/components/GameProgress.jsx
import React from "react";
import { useGame } from "../context/GameContext";
import { useBoard } from "../context/BoardContext";
import TraitProgress from "./TraitProgress";
import { traits as traitData } from "../data/traits";
import styles from "@/styles/GameProgress.module.css";

const tierOrder = {
  prismatic: 0,
  gold: 1,
  unique: 2,
  silver: 3,
  bronze: 4,
  inactive: 5,
};

const costColors = {
  1: "#192735",
  2: "#1d5229",
  3: "#1e4c71",
  4: "#950771",
  5: "#a46f28",
};

export default function GameProgress() {
  const { compositionActiveTraits, costDistribution } = useGame();
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

  return (
    <div className={styles.gameContainer}>
      <div className={styles.grid}>
        {entries.map(({ id, name, target, current, isExtra }) => (
          <TraitProgress
            key={id}
            id={id}
            name={name}
            target={target}
            current={current}
            dimmed={isExtra}
          />
        ))}
      </div>
      {/* Cost Distribution */}
      <div className={styles.costGridParent}>
        <div className={styles.costGrid}>
          {[1, 2, 3, 4, 5].map((cost) => (
            <div
              key={cost}
              className={styles.costItem}
              style={{
                backgroundColor: costColors[cost],
                opacity: costDistribution[cost] ? 1 : 0.3,
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
