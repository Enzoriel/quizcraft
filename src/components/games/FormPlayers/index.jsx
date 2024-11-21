"use client";

import Button from "@/components/ui/Button";
import React, { useState } from "react";
import styles from "./FormPlayers.module.css";

const FormPlayers = () => {
  const [players, setPlayers] = useState(["", "", "", "", ""]);
  const [nameGame, setNameGame] = useState("");

  const handleInputChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const addField = () => {
    if (players.length === 10) {
      alert("No se pueden agregar más jugadores");
      return;
    }
    setPlayers([...players, ""]);
  };

  const deleteField = (index) => {
    if (index <= 4) return alert("No se puede tener menos de 5 jugadores");
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const game = { [nameGame]: players };
    console.log(game);
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
        <Button type="button" title={"Añadir jugador"} onClick={addField} className={styles.button} />
        <Button
          type="button"
          title={"Eliminar jugador"}
          onClick={() => deleteField(players.length - 1)}
          className={styles.button}
        />

        <Button title={"Enviar"} type="submit" className={styles.button} />
      </div>
    </form>
  );
};

export default FormPlayers;
