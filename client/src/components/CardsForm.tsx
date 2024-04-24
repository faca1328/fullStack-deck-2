import React, { useState } from "react";

interface Props {
  addNewCard: (newCard: string) => void;
}

export const CardsForm = ({ addNewCard }: Props) => {
  const [text, setText] = useState("");

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      return; // Evitar agregar cartas vacías
    }

    addNewCard(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleCreateCard}>
      <label htmlFor="card-text"> Card Text : </label>
      <input
        id="card-text"
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
      <button> Create Card </button>
    </form>
  );
};
