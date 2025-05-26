// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { modals, useModals } from "@mantine/modals";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";
import { useGame } from "../context/GameContext";
import { useBoard } from "../context/BoardContext";
import Board from "./Board";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Set10() {
  const { isSolved } = useGame();
  const {
    mistakes,
    resetMistakes,
    team,
    headliner,
    solvedToday,
    markSolved,
    dateKey,
  } = useBoard();
  const welcomeShownRef = useRef(false);
  const alertedRef = useRef(false);

  // Welcome modal: show once per user
  useEffect(() => {
    const shown = localStorage.getItem("welcomeShown");
    if (!shown && !welcomeShownRef.current) {
      welcomeShownRef.current = true;
      modals.openContextModal({
        modal: "welcome",
        size: "lg",
      });
      localStorage.setItem("welcomeShown", "true");
    }
  }, [modals]);

  useEffect(() => {
    if (isSolved && !solvedToday) {
      alertedRef.current = true;
      let rating;
      if (mistakes === 0) rating = "S";
      else if (mistakes === 1) rating = "A";
      else if (mistakes === 2) rating = "B";
      else if (mistakes <= 4) rating = "C";
      else rating = "D";

      const ratingKey = "ratingCounts";
      const storedRatings = JSON.parse(localStorage.getItem(ratingKey) || "{}");
      storedRatings[rating] = (storedRatings[rating] || 0) + 1;
      localStorage.setItem(ratingKey, JSON.stringify(storedRatings));

      const playedKey = "playedCount";
      const prevPlayed = parseInt(localStorage.getItem(playedKey) || "0", 10);
      const newPlayed = prevPlayed + 1;
      localStorage.setItem(playedKey, newPlayed);

      const streakKey = "currentStreak";
      const maxKey = "maxStreak";
      const prevStreak = parseInt(localStorage.getItem(streakKey) || "0", 10);
      const newStreak = prevStreak + 1;
      localStorage.setItem(streakKey, newStreak);
      const prevMax = parseInt(localStorage.getItem(maxKey) || "0", 10);
      const newMax = Math.max(prevMax, newStreak);
      localStorage.setItem(maxKey, newMax);

      resetMistakes();
      markSolved();
      modals.openContextModal({
        modal: "endGame",
        innerProps: { rating, mistakes },
      });
    }
  }, [isSolved, solvedToday]);

  useEffect(() => {
    if (solvedToday && !alertedRef.current) {
      alertedRef.current = true;
      const raw = localStorage.getItem(`todayResult_${dateKey}`);
      const { rating, mistakes } = JSON.parse(raw || "{}");
      modals.openContextModal({
        modal: "endGame",
        innerProps: { rating, mistakes },
      });
    }
  }, []);

  return (
    <>
          <Head>
            <title>TFT Remix Rumble Puzzle</title>
          </Head>
          <main
            className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}
          >
            <Board />
          </main>
    </>
  );
}
