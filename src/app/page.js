import FormPlayers from "@/components/games/FormPlayers";
import styles from "./page.module.css";
import Header from "@/components/layout/Header";
import { ContextProvider } from "@/features/Context";

export default function Home() {
  return (
    <div className={styles.page}>
      <ContextProvider>
        <Header title={"TEN 10"} />
        <FormPlayers />
      </ContextProvider>
    </div>
  );
}
