"use client";

import { useContext } from "react";
import Modal from "..";
import { Context } from "@/features/Context";
import styles from "./FormPlayersModal.module.css";

const FormPlayersModal = () => {
  const { isModalOpen, setIsModalOpen, data, handleSubmit, handleEditChange } = useContext(Context);

  if (isModalOpen.state) {
    if (isModalOpen.action === "errorAddPlayer") {
      return (
        <Modal
          title={"No se pueden añadir más"}
          titleButton={"Confirmar"}
          isOpen={isModalOpen.state}
          activeButton={true}
          onClose={() => setIsModalOpen({ state: false, action: "" })}
          className={styles.accept}
        />
      );
    }
    if (isModalOpen.action === "errorDeletePlayer") {
      return (
        <Modal
          title={"No se pueden eliminar más"}
          titleButton={"Confirmar"}
          isOpen={isModalOpen.state}
          activeButton={true}
          onClose={() => setIsModalOpen({ state: false, action: "" })}
        />
      );
    }
    if (isModalOpen.action === "editPlayer") {
      return (
        <Modal
          title={"Editar ronda"}
          titleButton={"Guardar"}
          isOpen={isModalOpen.state}
          activeButton={true}
          onClose={() => setIsModalOpen({ state: false, action: "" })}
        >
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.title}>
              Título:
              <input
                type="text"
                value={data[isModalOpen.index].gameName}
                onChange={(e) => handleEditChange("gameName", isModalOpen.index, 0, e.target.value)}
                title="Ingrese el logro que deben cumplir los jugadores"
                required
              />
            </label>
            <section className={styles.players}>
              {data[isModalOpen.index].players.map((player, index) => (
                <div key={index}>
                  <label className={styles.input + " " + styles.input_enter}>
                    Jugador {index + 1}
                    <input
                      type="text"
                      value={player}
                      onChange={(e) => handleEditChange("players", isModalOpen.index, index, e.target.value)}
                      title="Ingrese el nombre del jugador"
                      required
                    />
                  </label>
                </div>
              ))}
            </section>
          </form>
        </Modal>
      );
    }
  }
  return null;
};

export default FormPlayersModal;
