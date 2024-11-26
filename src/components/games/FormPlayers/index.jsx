"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import styles from "./FormPlayers.module.css";
import Modal from "@/components/ui/Modal";

const FormPlayers = () => {
  const [players, setPlayers] = useState(["", "", "", "", ""]);
  const [nameGame, setNameGame] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formCount, setFormCount] = useState(0);
  const [formHistory, setFormHistory] = useState([]);
  const [data, setData] = useState([]);
  const [viewPlayers, setViewPlayers] = useState([false]);

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
    setData([...data, { gameName: nameGame, players: players }]);
    console.log(data);
    setFormHistory([...formHistory, { nameGame, players }]);
    setFormCount(formCount + 1);
    setViewPlayers([...viewPlayers, false]);
    setPlayers(["", "", "", "", ""]);
    setNameGame("");
  };

  const handleRollback = () => {
    if (formCount > 0) {
      const previousForm = formHistory[formCount - 1];
      setPlayers(previousForm.players);
      setNameGame(previousForm.nameGame);
      setFormHistory(formHistory.slice(0, formCount - 1));
      setViewPlayers(viewPlayers.slice(0, formCount - 1));
      setData(data.slice(0, formCount - 1));
      setFormCount(formCount - 1);
    }
  };

  const renderModal = () => {
    if (isModalOpen) {
      if (players.length === 10) {
        return (
          <Modal
            title={"No se pueden añadir más"}
            titleButton={"Confirmar"}
            isOpen={isModalOpen}
            activeButton={true}
            onClose={() => setIsModalOpen(false)}
            className={styles.accept}
          />
        );
      } else if (players.length === 5) {
        return (
          <Modal
            title={"No se pueden eliminar más"}
            titleButton={"Confirmar"}
            isOpen={isModalOpen}
            activeButton={true}
            onClose={() => setIsModalOpen(false)}
          />
        );
      }
    }
    return null;
  };

  function clickeable(index) {
    const newViewPlayers = [...viewPlayers];
    newViewPlayers[index] = !newViewPlayers[index];
    setViewPlayers(newViewPlayers);
  }

  return (
    <>
      {formCount < 10 && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <svg
            onClick={handleRollback}
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
      )}
      {data && data.length > 0 && (
        <div className={styles.displayGameData}>
          {data.map((data, index) => {
            const players = data.players;
            return (
              <div key={index} className={styles.gameDataName}>
                <h2>{data.gameName}</h2>
                <svg
                  className={styles.accordion_button}
                  onClick={() => clickeable(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                {viewPlayers[index] && (
                  <ul className={styles.gameDataPlayers}>
                    {players.map((player, index) => (
                      <li key={index}>
                        {index + 1}. {player}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FormPlayers;
