import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { modals } from "@mantine/modals";
import styles from "@/styles/Home.module.css";
import Board from "../../../../components/Board";
import { GameProvider, useGame } from "../../../../context/GameContext";
import { BoardProvider, useBoard } from "../../../../context/BoardContext";
import Set16 from "../../../../components/Set16";
import compositions from "../../../../data/lore-and-legends/comps";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function PuzzleContent({ compId }) {
  const { pickCompositionById } = useGame();

  useEffect(() => {
    // When the puzzle page loads, select the specific composition
    if (compId) {
      pickCompositionById(compId);
    }
  }, [compId, pickCompositionById]);

  return (
    <>
      <main
        className={`${styles.main} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Set16 />
      </main>
    </>
  );
}

export default function Puzzle() {
  const router = useRouter();
  const { id } = router.query;

  // Validate that the composition exists
  if (id && !compositions.find((c) => c.id === id)) {
    return (
      <>
        <Head>
          <title>TFTYK | Puzzle Not Found</title>
        </Head>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Puzzle not found</h1>
        </div>
      </>
    );
  }

  const comp = compositions.find((c) => c.id === id);

  return (
    <>
      <Head>
        <title>TFTYK | Lore & Legends - Level {comp?.id}</title>
      </Head>
      <BoardProvider setKey="16" mode="endless">
        <GameProvider setKey="16" mode="endless">
          <PuzzleContent compId={id} />
        </GameProvider>
      </BoardProvider>
    </>
  );
}
