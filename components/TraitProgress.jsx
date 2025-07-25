// src/components/TraitProgress.jsx
import React from "react";
import { traits as traitsRemix } from "../data/remix-rumble/traits";
import { traits as traitsCyber } from "../data/cybercity/traits";
import { traits as traitsKo } from "../data/ko-coliseum/traits";
import styles from "@/styles/TraitProgress.module.css";
import { Slider } from "@mantine/core";

export default function TraitProgress({
  id,
  name,
  target,
  current,
  dimmed,
  setKey,
}) {
  let traitData;
  if (setKey === "14") {
    traitData = traitsCyber;
  } else if (setKey === "15") {
    traitData = traitsKo;
  } else {
    traitData = traitsRemix;
  }
  const def = traitData?.find((t) => t.id === id);
  const breakpoints = def?.breakpoints || [];
  const tiers = def?.tiers || [];

  // Determine tier index for icon background (reuse TraitItem logic)
  let tierIndex = -1;
  breakpoints.forEach((bp, idx) => {
    if (target >= bp) tierIndex = idx;
  });
  const tierName = tierIndex >= 0 ? tiers[tierIndex] : "inactive";
  const bgUrl = `/images/traits/${tierName}.png`;
  // Generate marks for every step 1..target
  const marks = Array.from({ length: target }, (_, i) => ({
    value: i + 1,
    label: "",
  }));

  const barClass =
    current < target
      ? styles.sliderBarYellow
      : current === target
      ? styles.sliderBarGreen
      : styles.sliderBarRed;

  return (
    <li className={`${styles.item} ${dimmed ? styles.dimmed : ""}`}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img
          src={`/images/traits/set${setKey}/${id}.png`}
          alt={name}
          className={styles.icon}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.text}>
          <span className={styles.count}>{target}</span>
          <span className={styles.name}>{name}</span>
        </div>

        <div className={styles.sliderContainer}>
          <Slider
            className={styles.slider}
            value={current}
            min={0}
            max={target == 0 ? 1 : target}
            marks={marks}
            disabled
            step={null}
            showLabelOnHover={false}
            label={null}
            classNames={{
              root: styles.sliderRoot,
              track: styles.sliderTrack,
              bar: barClass,
              markWrapper: styles.sliderMarkWrapper,
              mark: styles.sliderMark,
              thumb: styles.sliderThumb,
            }}
          />
          <div className={styles.ratio}>
            {current}/{target}
          </div>
        </div>
      </div>
    </li>
  );
}
