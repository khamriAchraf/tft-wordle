// src/components/MyBoard.jsx
import React from "react";
import { useBoard } from "../context/BoardContext";
import BoardUnitCard from "./BoardUnitCard";
import styles from "@/styles/MyBoard.module.css";
import { useGame } from "../context/GameContext";
import { Text } from "@mantine/core";
import { GiBroom } from "react-icons/gi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { modals } from "@mantine/modals";

export default function MyBoard() {
  const { team, removeUnit, mistakes } = useBoard();

  // Create an array of 12 slots, filling with team units or null
  const slots = Array.from({ length: 12 }, (_, i) => team[i] || null);

  return (
    <div className={styles.board}>
      <div className={styles.boardHeader}>
        <div className={styles.boardControls}>
          <button
            className={styles.clear}
            onClick={() => team.forEach(removeUnit)}
          >
            Clear
          </button>
          <div>
            <Text size="xl" className={styles.title}>
              My Board
            </Text>
            <Text size="xs">Mistakes: {mistakes}</Text>
          </div>
        </div>
        <div className={styles.appControls}>
          <button
            className={styles.clear}
            onClick={() =>
              modals.openContextModal({
                modal: "stats",
              })
            }
          >
            Stats
          </button>

          <button
            className={styles.clear}
            onClick={() =>
              modals.openContextModal({
                modal: "welcome",
              })
            }
          >
            How to Play
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {slots.map((unit, idx) => (
          <div key={idx} className={styles.slot}>
            {unit ? (
              <BoardUnitCard unit={unit} />
            ) : (
              <div className={styles.placeholder}>
                <img className={styles.helmet} src="/images/helmet.png" alt="Gold" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
