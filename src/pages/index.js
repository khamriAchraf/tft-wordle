// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { modals, useModals } from '@mantine/modals';
import styles from '@/styles/Home.module.css';
import Board from '../../components/Board';
import { useGame } from '../../context/GameContext';
import { useEffect, useRef } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  const { isSolved } = useGame();
  const welcomeShownRef = useRef(false);
  const hasAlerted = useRef(false);

  // Welcome modal: show once per user
  useEffect(() => {
    const shown = localStorage.getItem('welcomeShown');
    if (shown && !welcomeShownRef.current) {
      welcomeShownRef.current = true;
      modals.openContextModal({ modal: 'welcome', title: 'Welcome', size: 'lg' });
      localStorage.setItem('welcomeShown', 'true');
    }
  }, [modals]);

  // Puzzle solved alert, once per puzzle
  useEffect(() => {
    if (isSolved && !hasAlerted.current) {
      hasAlerted.current = true;
      alert('🎉 Congratulations! You’ve cleared the puzzle! 🎉');
    }
  }, [isSolved]);

  return (
    <>
      <Head>
        <title>TFT Remix Rumble Puzzle</title>
      </Head>
      <main className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}>
        <Board />
      </main>
    </>
  );
}
