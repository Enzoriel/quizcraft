import RoomManager from "@/components/ui/RoomManager";
import styles from "./page.module.css";
import TenMax from "@/components/games/TenMax";

export default function Home() {
  return (
    <div className={styles.page}>
      <RoomManager />
    </div>
  );
}
