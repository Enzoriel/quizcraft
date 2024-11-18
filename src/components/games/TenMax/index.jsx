import Header from "@/components/ui/Header";
import styles from "./TenMax.module.css";

const TenMax = () => {
  return (
    <>
      <Header title="top 10" />
      <section className={styles.players}>
        <h2>Logro utilizado como filtro para mostrar los 10 que más lo han logrado</h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.number}>1</span> <p>item 1</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>2</span> <p>item 2</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>3</span> <p>item 3</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>4</span> <p>item 4</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>5</span> <p>item 5</p>
                <span className={styles.data}>data</span>
              </li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.number}>6</span> <p>item 6</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>7</span> <p>item 7</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>8</span> <p>item 8</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>9</span> <p>item 9</p>
                <span className={styles.data}>data</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>10</span> <p>item 10</p>
                <span className={styles.data}>data</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TenMax;
