import React from "react";
import { useBoard } from "../context/BoardContext";
import UnitPool from "./UnitPool";
import MyBoard from "./MyBoard";
import GameProgress from "./GameProgress";
import styles from "@/styles/Board.module.css";
import { Button, Drawer, Tabs } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const Board = ({ setHasAlerted }) => {
  const { units, team, addUnit, removeUnit, activeTraits, setKey } = useBoard();
  // Detect mobile screens
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [boardOpened, boardHandlers] = useDisclosure(false);
  const [compOpened, compHandlers] = useDisclosure(false);

  // Mobile layout: tabs for main sections
  if (isMobile) {
    return (
      <div defaultValue="champions">
        <div className={styles.championPool}>
          <UnitPool />
        </div>

        <Drawer
          position="right"
          opened={boardOpened}
          onClose={boardHandlers.close}
          title="My Board"
        >
            <MyBoard setHasAlerted={setHasAlerted} />
        </Drawer>

        <Button variant="default" onClick={boardHandlers.open} className={styles.myBoardButton}>
          My Board
        </Button>

        <Drawer
          position="bottom"
          opened={compOpened}
          onClose={compHandlers.close}
          title="Composition"
        >
            <GameProgress />
        </Drawer>

        <Button variant="default" onClick={compHandlers.open} className={styles.compButton}>
          Composition
        </Button>
      </div>
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
