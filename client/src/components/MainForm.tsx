import React, { useState } from "react";
import { DECKS } from "../types";

interface Props {
  addNewDeck: (newDeck: DECKS) => void;
}


export const MainForm = ({ addNewDeck }: Props) => {
  const [title, setTitle] = useState("");

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/decks", {
        method: "POST",
        body: JSON.stringify({ title }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      addNewDeck(data); // Agregar el nuevo mazo al estado sin evitando el loop del useEffect
      setTitle("");
    } catch (error) {
      console.error("Error creating deck:", error);
    }
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
