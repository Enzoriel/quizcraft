import styles from "./ContainerGames.module.css";

const ContainerGames = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Nombre del minijuego</h2>
        <Image src="" alt="imagen del minijuego" />
        <p>Descripción del minijuego</p>
      </div>
    </div>
  );
};

export default ContainerGames;
