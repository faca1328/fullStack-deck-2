import React, { useState } from "react";
import { DECKS } from "../types";

interface Props {
  addNewDeck: (newDeck: DECKS) => void;
}


export const MainForm = ({ addNewDeck }: Props) => {
  const [title, setTitle] = useState("");

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    }).then(response => response.json())
      .then(data => addNewDeck(data)) // Agregar el nuevo mazo al estado sin evitando el loop del useEffect
      .then(() => setTitle(""))
      .catch(error => console.log(error))
  };

  return (
    <form onSubmit={handleCreateDeck}>
      <label htmlFor="deck-title"> Deck Title : </label>
      <input
        id="deck-title"
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
      <button> Create Deck </button>
      <hr />
      <h1>{title}</h1>
    </form>
  );
};
