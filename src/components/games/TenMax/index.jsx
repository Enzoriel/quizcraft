import Header from "@/components/layout/Header";
import styles from "./TenMax.module.css";
import Button from "@/components/ui/Button";
import { useId } from "react";

const TenMax = () => {
  const idInput = useId();
  return (
    <>
      <Header title="top 10" />
      <section className={styles.db_players}>
        <h2>Logro utilizado como filtro para mostrar los 10 que más lo han logrado</h2>
        <div className={styles.container}>
          <div className={styles.rounds}>
            <p className={styles.rounds_text}>Ronda 1</p>
            <section className={styles.data_player}>
              <span className={styles.data_player_points}>10 puntos</span>
              <p className={styles.data_player_name}>Zoriel</p>
            </section>
            <section className={styles.data_rival}>
              <p className={styles.data_rival_name}>Rival</p>
              <span className={styles.data_rival_points}>1325 puntos</span>
            </section>
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.number}>1</span> <p>Leonel Messi</p>
                <span className={styles.data}>879</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>2</span> <p>Cristiano Ronaldo</p>
                <span className={styles.data}>780</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>3</span> <p>Luis Suarez</p>
                <span className={styles.data}>678</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>4</span> <p>Robert Lewandowski</p>
                <span className={styles.data}>658</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>5</span> <p>Miguel Borja</p>
                <span className={styles.data}>500</span>
              </li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.number}>6</span> <p>Fernando Cavenaghi</p>
                <span className={styles.data}>470</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>7</span> <p>Lucas Beltrán</p>
                <span className={styles.data}>400</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>8</span> <p>Julián Álvarez</p>
                <span className={styles.data}>240</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>9</span> <p>Enzo Pérez</p>
                <span className={styles.data}>220</span>
              </li>
              <li className={styles.item}>
                <span className={styles.number}>10</span> <p>Franco Armani</p>
                <span className={styles.data}>110</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.input_section}>
        <div className={styles.input_container}>
          <time className={styles.data_player_timer} dateTime="PT10S" role="timer">
            10
          </time>
          <label htmlFor={idInput} className={styles.input_label}>
            <input id={idInput} type="text" placeholder="Ingrese el nombre del jugador" />
          </label>
          <Button title="Enter" />
          <time className={styles.data_rival_timer} dateTime="PT10S" role="timer">
            10
          </time>
        </div>
      </section>
    </>
  );
};

export default TenMax;
