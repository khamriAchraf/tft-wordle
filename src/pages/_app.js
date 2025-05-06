import "@/styles/globals.css";
import { BoardProvider } from "../../context/BoardContext";

export default function App({ Component, pageProps }) {
  return (
    <BoardProvider>
      <Component {...pageProps} />
    </BoardProvider>
  );
}
