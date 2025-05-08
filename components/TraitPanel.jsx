// src/components/TraitPanel.jsx
import React from "react";
import styles from "@/styles/TraitPanel.module.css";
import TraitItem from "./TraitItem";
import { traits as traitData } from "../data/traits";

const tierOrder = {
  prismatic: 0,
  gold: 1,
  unique: 2,
  silver: 3,
  bronze: 4,
  inactive: 5,
};

const TraitPanel = ({ activeTraits }) => {
  
  // Build and sort trait entries
  const sortedTraits = Object.entries(activeTraits)
    .map(([id, { count }]) => {
      const def = traitData.find((t) => t.id === id);
      const breakpoints = def?.breakpoints || [];
      let tierIndex = -1;
      breakpoints.forEach((bp, idx) => {
        if (count >= bp) tierIndex = idx;
      });
      const tierName = tierIndex >= 0 ? def.tiers[tierIndex] : "inactive";
      const name = def ? def.name : id.charAt(0).toUpperCase() + id.slice(1);
      return { id, count, name, tierName };
    })
    .sort((a, b) => {
      const tierDiff = tierOrder[a.tierName] - tierOrder[b.tierName];
      if (tierDiff !== 0) return tierDiff;
      if (b.count !== a.count) return b.count - a.count;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className={styles.traitPanel}>
      <h2 className={styles.title}>Active Traits</h2>
      {!sortedTraits.length ? (
        <p className={styles.empty}>No active traits</p>
      ) : (
        <ul className={styles.list}>
          {sortedTraits.map(({ id, count }) => (
            <TraitItem key={id} id={id} count={count} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TraitPanel;
