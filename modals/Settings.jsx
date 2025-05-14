// src/components/Settings.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, Center, CloseButton, Group, Switch, Text, Stack } from '@mantine/core';
import { useBoard } from '../context/BoardContext';
import styles from '@/styles/Settings.module.css';

export default function Settings({ context, id, innerProps }) {
  const [hardMode, setHardMode] = useState(false);
  const initialRef = useRef(false);

  // Load existing value on first render
  useEffect(() => {
    const saved = localStorage.getItem('hardMode') === 'true';
    setHardMode(saved);
    initialRef.current = saved;
  }, []);

  const handleSave = () => {
    const changed = hardMode !== initialRef.current;
    // persist new difficulty flag
    localStorage.setItem('hardMode', hardMode ? 'true' : 'false');

    if (changed) {
      // clear all stats
      localStorage.removeItem('ratingCounts');
      localStorage.removeItem('playedCount');
      localStorage.removeItem('currentStreak');
      localStorage.removeItem('maxStreak');
      // clear the board & mistakes
      innerProps.toggleHardMode(hardMode);
      innerProps.clearBoard();
    }
    context.closeModal(id);
  };

  return (
    <Stack spacing="md" className={styles.container}>
      <div className={styles.header}>
        <div />
        <Text size="lg" className={styles.title}>Settings</Text>
        <CloseButton onClick={() => context.closeModal(id)} />
      </div>

      <Group className={styles.content} justify="center">
        <Switch
          checked={hardMode}
          onChange={(e) => setHardMode(e.currentTarget.checked)}
          label="Hard mode"
        />
      </Group>

      <Group className={styles.content} justify="center">
        <Text align="center" size="sm">
          Hard mode: Unit traits are hidden. You cannot search or sort by trait.
        </Text>
        <Text color="orange" size="sm">
          Changing difficulty will reset the board and clear all statistics.
        </Text>
      </Group>

      <Group justify="center" className={styles.buttonGroup}>
        <button className={styles.button} onClick={handleSave}>Save</button>
      </Group>
    </Stack>
  );
}
