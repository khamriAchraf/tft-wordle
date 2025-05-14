import { Button, Center, CloseButton, Group, Text } from "@mantine/core";
import React from "react";
import styles from "@/styles/Welcome.module.css";

const Welcome = ({ context, id, innerProps }) => {
  return (
    <>
      <div className={styles.header}>
        <div></div>
        <Text size="lg" className={styles.title}>How to Play</Text>
        <CloseButton onClick={() => context.closeModal(id)} />
      </div>
      <div className={styles.content}>
        <ul style={{ paddingLeft: 20 }}>
          <li>Tap to add units, trash to remove</li>
          <li>Tap a trait icon to make a headliner</li>
          <li>
            Match the exact traits and costs shown
          </li>
          <li>Removing a unit = score penalty
          </li>
        </ul>
      </div>
      <Group className={styles.content} justify="center">
        <Text color="#888" align="center" size="sm">
        This website is a fan-made project and is not affiliated with, endorsed by, or sponsored by Riot Games or Teamfight Tactics. All trademarks are property of their respective owners. No copyright infringement is intended.
        </Text>
      </Group>
      <Group justify="center" className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => context.closeModal(id)}>
          Play
        </button>
      </Group>
    </>
  );
};

export default Welcome;
