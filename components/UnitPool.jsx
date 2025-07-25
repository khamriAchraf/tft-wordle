// src/components/UnitPool.jsx
import React, { useEffect, useState } from "react";
import remixStyles from "@/styles/UnitPool.module.css";
import cyberStyles from "@/styles/cybercity/UnitPool.module.css";
import koStyles from "@/styles/ko-coliseum/UnitPool.module.css";
import { useBoard } from "../context/BoardContext";
import { traits as traitsRemix } from "../data/remix-rumble/traits";
import { traits as traitsCyber } from "../data/cybercity/traits";
import { traits as traitsKo } from "../data/ko-coliseum/traits";
import UnitPoolCard from "./UnitPoolCard";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import {
  IoIosArrowDropleftCircle,
  IoMdArrowDropleft,
  IoMdReturnLeft,
} from "react-icons/io";
import { Tooltip } from "@mantine/core";
import Link from "next/link";
export default function UnitPool() {
  const { units, team, addUnit, hardMode, setKey } = useBoard();
  let traitData;
  if (setKey === "14") {
    traitData = traitsCyber;
  } else if (setKey === "15") {
    traitData = traitsKo;
  } else {
    traitData = traitsRemix;
  }
  let styles;
  if (setKey === "14") {
    styles = cyberStyles;
  } else if (setKey === "15") {
    styles = koStyles;
  } else {
    styles = remixStyles;
  }
  const [groupBy, setGroupBy] = useState("cost");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSearchQuery("");
    setGroupBy("cost");
  }, [hardMode]);

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
    ? units.filter(
        (u) =>
          u.name.toLowerCase().includes(query) ||
          u.id.toLowerCase().includes(query)
      )
    : [];
  const traitMatches = query
    ? traitData.filter(
        (t) =>
          (t.name.toLowerCase().includes(query) ||
            t.id.toLowerCase().includes(query)) &&
          traitBuckets[t.id]?.length
      )
    : [];

  const addAllTrait = (traitId) => {
    traitBuckets[traitId].forEach((unit) => addUnit(unit));
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <Tooltip label="Return to Set Selection">
          <Link href="/">
            <button className={styles.return}>
              <IoMdArrowDropleft className={styles.returnIcon} />
            </button>
          </Link>
        </Tooltip>

        <h1 className={styles.title}>Unit Pool</h1>
      </div>

      {!hardMode && (
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
      )}

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
                    src={`/images/traits/set${setKey}/${trait.id}.png`}
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
              <div className={styles.traitGroupHeader}>
                <div className={styles.headerText}>
                  <img
                    src={`/images/traits/set${setKey}/${trait.id}.png`}
                    alt={trait.name}
                    className={styles.traitIcon}
                  />
                  {trait.name}{" "}
                </div>
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
