import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Board from "../../components/Board";
import { useGame } from "../../context/GameContext";
import { useEffect, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { isSolved } = useGame();
  // track to only alert the first time they solve
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (isSolved && !hasAlerted.current) {
      hasAlerted.current = true;
      alert("🎉 Congratulations! You’ve cleared the puzzle! 🎉");
    }
  }, [isSolved]);

  return (
    <>
      <Board />
    </>
  );
}
