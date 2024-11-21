import FormularioJugadores from "@/components/games/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FormularioJugadores />
    </div>
  );
}
