"use client";

import React, { useState } from "react";

const FormularioJugadores = () => {
  const [jugadores, setJugadores] = useState([""]);
  const [nameJuego, setNameJuego] = useState("");

  const handleInputChange = (index, value) => {
    const nuevosJugadores = [...jugadores];
    nuevosJugadores[index] = value;
    setJugadores(nuevosJugadores);
  };

  const agregarCampo = () => {
    if (jugadores.length === 10) {
      alert("No se pueden agregar más jugadores");
      return;
    }
    setJugadores([...jugadores, ""]); // Añade un nuevo campo vacío
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const juegoConJugadores = { [nameJuego]: jugadores };
    console.log(juegoConJugadores);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del juego:
        <input type="text" value={nameJuego} onChange={(e) => setNameJuego(e.target.value)} required />
      </label>
      {jugadores.map((jugador, index) => (
        <div key={index}>
          <label>
            Jugador {index + 1}:
            <input type="text" value={jugador} onChange={(e) => handleInputChange(index, e.target.value)} required />
          </label>
        </div>
      ))}
      <button type="button" onClick={agregarCampo}>
        Añadir otro jugador
      </button>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioJugadores;
