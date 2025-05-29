import React from "react";
import { useBoard } from "../context/BoardContext";
import UnitPool from "./UnitPool";
import MyBoard from "./MyBoard";
import GameProgress from "./GameProgress";
import styles from "@/styles/Board.module.css";
import { Tabs } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Board = ({ setHasAlerted }) => {
  const { units, team, addUnit, removeUnit, activeTraits, setKey } = useBoard();
  // Detect mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Mobile layout: tabs for main sections
  if (isMobile) {
    return (
      <Tabs defaultValue="champions">
        <Tabs.List grow>
          <Tabs.Tab value="champions">Units</Tabs.Tab>
          <Tabs.Tab value="board">Board</Tabs.Tab>
          <Tabs.Tab value="progress">Composition</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="champions" pt="xs">
          <div className={styles.championPool}>
            <UnitPool />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="board" pt="xs">
          <div className={styles.board}>
            <MyBoard setHasAlerted={setHasAlerted} />
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="progress" pt="xs">
          <div className={styles.gameProgress}>
            <GameProgress />
          </div>
        </Tabs.Panel>
      </Tabs>
    );
  }

  // Desktop layout: side-by-side
  return (
    <div className={styles.container}>
      <div className={styles.championPool}>
        <UnitPool />
      </div>
      <div className={styles.board}>
        <MyBoard setHasAlerted={setHasAlerted} />
        <div className={styles.gameProgress}>
          <GameProgress />
        </div>
      </div>
    </div>
  );
};

export default Board;
