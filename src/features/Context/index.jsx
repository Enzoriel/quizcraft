"use client";

const { createContext, useState } = require("react");

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState({ state: false, action: "", index: null });
  const [players, setPlayers] = useState(["", "", "", "", ""]);
  const [formCount, setFormCount] = useState(0);
  const [formHistory, setFormHistory] = useState([]);
  const [data, setData] = useState([]);
  const [viewPlayers, setViewPlayers] = useState([false]);
  const [nameGame, setNameGame] = useState("");

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

  const handleEditChange = (field, indexGame, indexPlayer, value) => {
    if (field === "gameName") {
      const newData = [...data];
      newData[indexGame].gameName = value;
      setData(newData);
    }
    if (field === "players") {
      const newData = [...data];
      newData[indexGame].players[indexPlayer] = value;
      setData(newData);
    }
  };

  function showPlayers(index) {
    const newViewPlayers = [...viewPlayers];
    newViewPlayers[index] = !newViewPlayers[index];
    setViewPlayers(newViewPlayers);
  }

  const contextValue = {
    isModalOpen,
    setIsModalOpen,
    players,
    setPlayers,
    nameGame,
    setNameGame,
    formCount,
    setFormCount,
    formHistory,
    setFormHistory,
    data,
    setData,
    viewPlayers,
    setViewPlayers,
    showPlayers,
    handleInputChange,
    addField,
    deleteField,
    handleSubmit,
    handleRollback,
    handleEditChange,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
