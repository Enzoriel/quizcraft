import FormPlayers from "@/components/games/FormPlayers";
import styles from "./page.module.css";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title={"TEN 10"} />
      <FormPlayers />
    </div>
  );
}
