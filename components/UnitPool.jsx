// src/components/UnitPool.jsx
import React, { useState } from "react";
import styles from "@/styles/UnitPool.module.css";
import { useBoard } from "../context/BoardContext";
import { traits as traitData } from "../data/traits";
import UnitPoolCard from "./UnitPoolCard";
import { HiMiniChevronUpDown } from "react-icons/hi2";

export default function UnitPool() {
  const { units, team, addUnit } = useBoard();
  const [groupBy, setGroupBy] = useState("cost");
  const [searchQuery, setSearchQuery] = useState("");

  // Cost buckets
  const costBuckets = {};
  units.forEach((u) => {
    costBuckets[u.cost] = costBuckets[u.cost] || [];
    costBuckets[u.cost].push(u);
  });

  // Trait buckets
  const traitBuckets = {};
  units.forEach((u) => {
    u.traits.forEach((tid) => {
      traitBuckets[tid] = traitBuckets[tid] || [];
      traitBuckets[tid].push(u);
    });
  });

  // Alphabetical trait list for grouping
  const sortedTraits = traitData
    .filter((t) => traitBuckets[t.id]?.length)
    .sort((a, b) => a.name.localeCompare(b.name));

  // Search matches
  const query = searchQuery.trim().toLowerCase();
  const unitMatches = query
    ? units.filter((u) => u.name.toLowerCase().includes(query))
    : [];
  const traitMatches = query
    ? traitData.filter(
        (t) =>
          t.name.toLowerCase().includes(query) && traitBuckets[t.id]?.length
      )
    : [];

  const addAllTrait = (traitId) => {
    traitBuckets[traitId].forEach((unit) => addUnit(unit));
  };

  return (
    <div className={styles.panel}>
      <h1 className={styles.title}>Unit Pool</h1>
      <div className={styles.poolHeader}>
        {/* Search bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search unit or trait..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.toggleContainer}>
          <select
            className={styles.toggleSelect}
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
          >
            <option value="cost">Cost</option>
            <option value="trait">Trait</option>
          </select>
          <HiMiniChevronUpDown className={styles.selectIcon} />
        </div>
      </div>

      <div className={styles.pool}>
        {/* Search results take priority */}
        {query ? (
          unitMatches.length > 0 ? (
            <div className={styles.section}>
              <div className={styles.header}>Results for "{searchQuery}"</div>
              <div className={styles.grid}>
                {unitMatches
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((unit) => (
                    <UnitPoolCard
                      key={unit.id}
                      unit={unit}
                      onAction={addUnit}
                      actionLabel={
                        team.some((u) => u.id === unit.id) ? "In Team" : "Add"
                      }
                    />
                  ))}
              </div>
            </div>
          ) : traitMatches.length > 0 ? (
            traitMatches.map((trait) => (
              <div key={trait.id} className={styles.section}>
                <div className={styles.header}>
                  <img
                    src={`/images/traits/${trait.id}.png`}
                    alt={trait.name}
                    className={styles.traitIcon}
                  />
                  {trait.name}{" "}
                  <button
                    className={styles.addAllButton}
                    onClick={() => addAllTrait(trait.id)}
                  >
                    Add All
                  </button>
                </div>
                <div className={styles.grid}>
                  {traitBuckets[trait.id]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((unit) => (
                      <UnitPoolCard
                        key={`${unit.id}-${trait.id}`}
                        unit={unit}
                        onAction={addUnit}
                        actionLabel={
                          team.some((u) => u.id === unit.id) ? "In Team" : "Add"
                        }
                      />
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No matching units or traits</p>
          )
        ) : groupBy === "cost" ? (
          [1, 2, 3, 4, 5].map((cost) => (
            <div key={cost} className={styles.section}>
              <div className={styles.header}>
                <img
                  src={`/images/gold.png`}
                  alt="Gold"
                  className={styles.icon}
                />{" "}
                {cost}
              </div>
              <div className={styles.grid}>
                {(costBuckets[cost] || [])
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((unit) => (
                    <UnitPoolCard
                      key={unit.id}
                      unit={unit}
                      onAction={addUnit}
                      actionLabel={
                        team.some((u) => u.id === unit.id) ? "In Team" : "Add"
                      }
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          sortedTraits.map((trait) => (
            <div key={trait.id} className={styles.section}>
              <div className={styles.header}>
                <img
                  src={`/images/traits/${trait.id}.png`}
                  alt={trait.name}
                  className={styles.traitIcon}
                />
                {trait.name}{" "}
                <button
                  className={styles.addAllButton}
                  onClick={() => addAllTrait(trait.id)}
                >
                  Add All
                </button>
              </div>
              <div className={styles.grid}>
                {traitBuckets[trait.id]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((unit) => (
                    <UnitPoolCard
                      key={`${unit.id}-${trait.id}`}
                      unit={unit}
                      onAction={addUnit}
                      actionLabel={
                        team.some((u) => u.id === unit.id) ? "In Team" : "Add"
                      }
                    />
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
