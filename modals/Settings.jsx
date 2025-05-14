import { Button, Center, CloseButton, Group, Switch, Text } from "@mantine/core";
import React, { useState } from "react";
import styles from "@/styles/Welcome.module.css";

const Settings = ({ context, id, innerProps }) => {
      const [hardMode, setHardMode] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <div></div>
        <Text size="lg" className={styles.title}>
          Settings
        </Text>
        <CloseButton onClick={() => context.closeModal(id)} />
      </div>
      <div className={styles.content}>
        <Switch
          checked={hardMode}
          onChange={(event) => setHardMode(event.currentTarget.checked)}
          label="Enable hard mode"
        />
      </div>

      <Group justify="center" className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => context.closeModal(id)}
        >
          Save
        </button>
      </Group>
    </>
  );
};

export default Settings;
