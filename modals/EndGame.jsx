// src/components/EndGame.jsx
import React, { useMemo } from "react";
import {
  Button,
  Center,
  Group,
  Text,
  Progress,
  Stack,
  CloseButton,
} from "@mantine/core";
import styles from "@/styles/EndGame.module.css";
import { FaGrinStars } from "react-icons/fa";
import { useRouter } from "next/router";

const RATINGS = ["S", "A", "B", "C", "D"];

export default function EndGame({ context, id, innerProps }) {
  const { currentStreak, maxStreak, played, ratingCounts } = useMemo(() => {
    const counts = JSON.parse(localStorage.getItem("ratingCounts") || "{}");
    const played = RATINGS.reduce((sum, r) => sum + (counts[r] || 0), 0);
    const currentStreak = parseInt(
      localStorage.getItem("currentStreak") || "0",
      10
    );
    const maxStreak = parseInt(localStorage.getItem("maxStreak") || "0", 10);
    return { currentStreak, maxStreak, played, ratingCounts: counts };
  }, []);
  const maxCount = Math.max(...RATINGS.map((r) => ratingCounts[r] || 0), 1);

  const router = useRouter();

  const handleClick = () => {
    context.closeModal(id);
    const targetUrl = `${router.asPath.replace(/\/$/, "")}/endless`;
    router.push(targetUrl);
  };

  return (
    <Stack spacing="xl" className={styles.container}>
      <div className={styles.header}>
        <div />
        <Text size="lg" className={styles.title}>
          Great Stuff!
        </Text>
        <CloseButton onClick={() => context.closeModal(id)} />
      </div>
      <Group justify="center" className={styles.content}>
        <div>
          <Text align="center" size="lg" weight={700}>
            {played}
          </Text>
          <Text size="sm">Played</Text>
        </div>
      </Group>

      <div className={styles.distribution}>
        {RATINGS.map((r) => {
          const count = ratingCounts[r] || 0;
          const pct = Math.round((count / maxCount) * 100);

          return (
            <Group key={r} align="center" spacing="md">
              <Text className={styles.distLabel}>{r}</Text>
              <Progress
                value={pct}
                size="xl"
                className={styles.distBar}
                color="#cab561"
              />
              <Text className={styles.distCount}>{count}</Text>
            </Group>
          );
        })}
      </div>

      <Center>
        <button
          className={styles.button}
          onClick={() => context.closeModal(id)}
        >
          Back to Board
        </button>
        <div></div>
        {innerProps.mode === "daily" && (
          <button className={styles.button} onClick={handleClick}>
            Play Endless Mode
          </button>
        )}
      </Center>
    </Stack>
  );
}
