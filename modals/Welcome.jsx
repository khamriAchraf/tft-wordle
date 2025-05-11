import { Button, Center, Group, Text } from "@mantine/core";
import React from "react";
import styles from "@/styles/Welcome.module.css";

const Welcome = ({ context, id, innerProps }) => {
  return (
    <>
      <Text size="md">HOW TO PLAY</Text>
      <ul style={{ paddingLeft: 20 }}>
        <li>Tap units to add them to your board.</li>
        <li>Tap the trash can to remove units.</li>
        <li>
          Tap a trait icon on a unit in your board to make it a headliner.
        </li>
      </ul>

      <Text size="md">HOW TO WIN</Text>
      <ul style={{ paddingLeft: 20 }}>
        <li>
          Build the exact composition that matches the given traits and unit
          costs.
        </li>
        <li>All traits and costs must match exactly — no more, no less.</li>
        <li>Removing a unit means affects your score, so be careful.</li>
      </ul>
      <Group justify="center" className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => context.closeModal(id)}>
          Start Without Music
        </button>
        <button className={styles.button} onClick={() => context.closeModal(id)}>
          Start With Music
        </button>
      </Group>
    </>
  );
};

export default Welcome;
