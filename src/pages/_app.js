import "@/styles/globals.css";
import { BoardProvider } from "../../context/BoardContext";
import { PuzzleProvider } from "../../context/PuzzleContext";

export default function App({ Component, pageProps }) {
  return (
    <PuzzleProvider>
      <BoardProvider>
        <Component {...pageProps} />
      </BoardProvider>
    </PuzzleProvider>
  );
}
