import "@/styles/globals.css";
import { BoardProvider } from "../../context/BoardContext";
import { GameProvider } from "../../context/GameContext";

export default function App({ Component, pageProps }) {
  return (
    <BoardProvider>
      <GameProvider>
        <Component {...pageProps} />
      </GameProvider>
    </BoardProvider>
  );
}
