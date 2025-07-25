// src/components/MyBoard.jsx
import React from "react";
import { useBoard } from "../context/BoardContext";
import BoardUnitCard from "./BoardUnitCard";
import remixStyles from "@/styles/MyBoard.module.css";
import cyberStyles from "@/styles/cybercity/MyBoard.module.css";
import koStyles from "@/styles/ko-coliseum/MyBoard.module.css";
import { useGame } from "../context/GameContext";
import { Text } from "@mantine/core";
import { GiBroom } from "react-icons/gi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { modals } from "@mantine/modals";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdClearAll, MdOutlineRefresh } from "react-icons/md";

export default function MyBoard({ setHasAlerted }) {
  const { team, removeUnit, mistakes, clearBoard, toggleHardMode, setKey } =
    useBoard();
  const { composition, pickRandomComposition, mode } = useGame();
  let styles;
  if (setKey === "14") {
    styles = cyberStyles;
  } else if (setKey === "15") {
    styles = koStyles;
  } else {
    styles = remixStyles;
  }
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
            <MdClearAll className={`${styles.clearIcon}`} />
          </button>
          <div>
            <Text size="xl" className={styles.title}>
              My Board
            </Text>
            <Text size="xs">Mistakes: {mistakes}</Text>
          </div>
        </div>
        {mode === "endless" && (
          <div>
            <button
              className={styles.refreshButton}
              onClick={() => {
                setHasAlerted(false);
                clearBoard();
                pickRandomComposition();
              }}
            >
              <MdOutlineRefresh className={styles.refreshIcon} />
              <Text>Refresh</Text>
            </button>
          </div>
        )}

        <div className={styles.appControls}>
          <button
            className={styles.clear}
            onClick={() =>
              modals.openContextModal({
                modal: "settings",
                innerProps: { clearBoard, toggleHardMode },
              })
            }
          >
            <IoMdSettings className={styles.clearIcon} />
          </button>
          <button
            className={styles.clear}
            onClick={() =>
              modals.openContextModal({
                modal: "stats",
              })
            }
          >
            <IoStatsChartSharp className={styles.clearIcon} />
          </button>

          <button
            className={styles.clear}
            onClick={() =>
              modals.openContextModal({
                modal: "welcome",
              })
            }
          >
            <IoMdHelpCircle className={styles.clearIcon} />
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
                <img
                  className={styles.helmet}
                  src={`/images/helmet${setKey !== 10 ? setKey : ""}.png`}
                  alt="Gold"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
