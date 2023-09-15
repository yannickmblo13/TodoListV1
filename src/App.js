import React, { useState } from "react";
import Task from "./Task";
import "./App.css";

function App() {
  const [taches, setTaches] = useState([
    {
      text: "azertyuiop",
    },
    {
      text: "azertyuiop",
    },
    {
      text: "azertyuiop",
    },
    {
      text: "azertyuiop",
    },
  ]);
  const [tacheUnique, setTacheUnique] = useState();

  let saisie = "";

  const addTask = (event) => {
    saisie = event.target.value;
    console.log(saisie);
  };

  const submitClickedHandler = (e) => {
    e.preventDefault();
    const objetEnvoyer = {
      text: saisie,
    };
    const nouveauState = [...taches];
    nouveauState.push(objetEnvoyer);
    setTaches(nouveauState);
    saisie = "";
  };

  const deleteClickedHandler = (index) => {
    const nouveauTableau = [...taches];
    nouveauTableau.splice(index, 1);
    setTaches(nouveauTableau)
  }

  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form>
          <input
            type="text"
            onChange={(e) => addTask(e)}
            placeholder="Que souhaitez-vous ajouter ?"
          />
          <button onClick={(e) => submitClickedHandler(e)}>Ajouter</button>
        </form>
      </div>

      <div>
        {taches.map((tache, index) => (
          <Task
            text={tache.text}
            key={index}
            deleteClickedHandler={() =>deleteClickedHandler(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
