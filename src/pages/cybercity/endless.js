// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { modals, useModals } from "@mantine/modals";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";
import Board from "../../../components/Board";
import { GameProvider, useGame } from "../../../context/GameContext";
import { BoardProvider, useBoard } from "../../../context/BoardContext";
import Set14 from "../../../components/Set14";

export default function Home() {
  return (
    <>
      <BoardProvider setKey="14" mode="endless">
        <GameProvider setKey="14" mode="endless">
          <Set14 />
        </GameProvider>
      </BoardProvider>
    </>
  );
}
