"use client";

import UseModal from "../Modal/UseModal";
import styles from "./RoomManager.module.css";

const RoomManager = () => {
  return (
    <section className={styles.room_manager}>
      <h2 className={styles.room_title}>Salas disponibles</h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.row}>
                <td>1</td>
                <td>Nombre del titulo</td>
                <td>Futbol</td>
              </tr>
              <tr className={styles.row}>
                <td>1</td>
                <td>Nombre del titulo</td>
                <td>Futbol</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.buttons}>
        <UseModal title={"¿Crear una nueva sala?"}></UseModal>
      </div>
    </section>
  );
};

export default RoomManager;
