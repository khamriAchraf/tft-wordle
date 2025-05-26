import "@mantine/core/styles.css";
import "@/styles/globals.css";
import { BoardProvider } from "../../context/BoardContext";
import { GameProvider } from "../../context/GameContext";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Welcome from "../../modals/Welcome";
import EndGame from "../../modals/EndGame";
import Stats from "../../modals/Stats";
import { useEffect, useState } from "react";
import Head from "next/head";
import Settings from "../../modals/Settings";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  const remixH = 194;
  const rumbleH = 154;
  const blockH = remixH + rumbleH;
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const calc = () =>
      setRows(Math.ceil(window.innerHeight / blockH) + 1);
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, [blockH]);

  // build a flat li1st of {type, top} entries:
  const strips = Array.from({ length: rows }).flatMap((_, i) => [
    { type: 'remix', top: i * blockH },
    { type: 'rumble', top: i * blockH + remixH },
  ]);

  return (
    <>
      <Head>
        <title>TFT Remix Rumble Puzzle</title>
        <link
          rel="preload"
          href="/images/remix.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/rumble.png"
          as="image"
          type="image/png"
        />
      </Head>
      <div className="bg-container">
        {strips.map(({ type, top }, i) => (
          <div
            key={i}
            className={`scrolling-strip ${type}`}
            style={{ top: `${top}px` }}
          />
        ))}
      </div>
      <div className="thingies">
        <img src="/images/thingies.png" alt="Gold" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <MantineProvider theme={theme}>
          <ModalsProvider
            modals={{ welcome: Welcome, endGame: EndGame, stats: Stats, settings: Settings }}
            modalProps={{ centered: true }}
          >
            
                <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
      </div>

    </>
  );
}
