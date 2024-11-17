import Header from "@/components/ui/Header";
import styles from "./TenMax.module.css";

const TenMax = () => {
  return (
    <>
      <Header title="top 10" />
      <div className={styles.tenMax}></div>
    </>
  );
};

export default TenMax;
