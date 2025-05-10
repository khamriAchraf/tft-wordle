import '@mantine/core/styles.css';
import "@/styles/globals.css";
import { BoardProvider } from "../../context/BoardContext";
import { GameProvider } from "../../context/GameContext";
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>

      <BoardProvider>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
      </BoardProvider>
    </MantineProvider>
  );
}
