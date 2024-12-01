"use client";

import Button from "@/components/ui/Button";
import { useContext, useRef, useState } from "react";
import styles from "./FormPlayers.module.css";
import FormPlayersModal from "@/components/ui/Modal/FormPlayersModal";
import { Context } from "@/features/Context";

const FormPlayers = () => {
  const gameDataRef = useRef(null);
  const {
    setIsModalOpen,
    players,
    formCount,
    data,
    viewPlayers,
    showPlayers,
    nameGame,
    setNameGame,
    handleInputChange,
    addField,
    deleteField,
    handleSubmit,
    handleRollback,
  } = useContext(Context);
  return (
    <>
      {formCount < 2 && (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <span className={styles.pageNum}>Página {formCount + 1}</span>
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
                  setIsModalOpen({ state: true, action: "errorAddPlayer" });
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
                  setIsModalOpen({ state: true, action: "errorDeletePlayer" });
                }
              }}
              className={styles.button}
            />
            <Button title={"Siguiente"} type="submit" className={styles.button} />
          </div>
        </form>
      )}
      <FormPlayersModal />
      {data && data.length === 2 && (
        <div className={styles.displayGameData}>
          <h1>Listado de rondas</h1>
          {data.map((data, index) => {
            const players = data.players;
            return (
              <div key={index} ref={gameDataRef} className={styles.gameDataName}>
                <h2>{data.gameName}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.gameDataButton}
                  onClick={() => {
                    setIsModalOpen({ state: true, action: "editPlayer", index: index });
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Editar</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => showPlayers(index)}
                  className={styles.gameDataButton}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Mostrar</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l11 0" />
                  <path d="M9 12l11 0" />
                  <path d="M9 18l11 0" />
                  <path d="M5 6l0 .01" />
                  <path d="M5 12l0 .01" />
                  <path d="M5 18l0 .01" />
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
