import React from "react";
import { useBoard } from "../context/BoardContext";
import UnitCard from "./UnitCard";
import TraitPanel from "./TraitPanel";
import styles from "@/styles/Board.module.css";
import UnitPool from "./UnitPool";
import BoardUnitCard from "./BoardUnitCard";
import MyBoard from "./MyBoard";
import PuzzleSummary from "./PuzzleSummary";
import GameProgress from "./GameProgress";

const Board = () => {
  const { units, team, addUnit, removeUnit, activeTraits } = useBoard();

  return (
    <div className={styles.container}>
      {/* Champion Pool */}
      <div className={styles.championPool}>
        <UnitPool />
      </div>
      <div className={styles.board}>
        {/* Current Team */}
        <MyBoard />

        <div className={styles.gameProgress}>
          <GameProgress />
        </div>

        {/* Traits Panel */}
        {/* <div className={styles.traits}>
        <TraitPanel activeTraits={activeTraits} />
      </div> */}
      </div>
    </div>
  );
};

export default Board;
