"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import styles from "./FormPlayers.module.css";
import Modal from "@/components/ui/Modal";

const FormPlayers = () => {
  const [players, setPlayers] = useState(["", "", "", "", ""]);
  const [nameGame, setNameGame] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const addField = () => {
    setPlayers([...players, ""]);
  };

  const deleteField = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const game = { [nameGame]: players };
    console.log(game);
  };

  const renderModal = () => {
    if (isModalOpen) {
      if (players.length === 10) {
        return (
          <Modal
            title={"No se pueden añadir más"}
            titleButton={"Confirmar"}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        );
      } else if (players.length === 5) {
        return (
          <Modal
            title={"No se pueden eliminar más"}
            titleButton={"Confirmar"}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        );
      }
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <svg
        onClick={() => window.history.back()}
        className={styles.return_button}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      <label className={styles.title}>
        Título:
        <input
          type="text"
          value={nameGame}
          onChange={(e) => setNameGame(e.target.value)}
          title="Ingrese el logro que deben cumplir los jugadores"
          required
        />
      </label>
      <section className={styles.players}>
        {players.map((player, index) => (
          <div key={index}>
            <label className={styles.input + " " + styles.input_enter}>
              Jugador {index + 1}
              <input
                type="text"
                value={player}
                onChange={(e) => handleInputChange(index, e.target.value)}
                title="Ingrese el nombre del jugador"
                required
              />
            </label>
          </div>
        ))}
      </section>
      <div className={styles.actions}>
        <Button
          type="button"
          title={"Añadir jugador"}
          onClick={() => {
            if (players.length < 10) {
              addField();
            } else {
              setIsModalOpen(true);
            }
          }}
          className={styles.button}
        />
        <Button
          type="button"
          title={"Eliminar jugador"}
          onClick={() => {
            if (players.length > 5) {
              deleteField(players.length - 1);
            }
            if (players.length === 5) {
              setIsModalOpen(true);
            }
          }}
          className={styles.button}
        />

        <Button title={"Enviar"} type="submit" className={styles.button} />
      </div>
      {renderModal()}
    </form>
  );
};

export default FormPlayers;
