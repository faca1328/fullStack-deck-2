import { useState } from "react";
import "../styles/MainDecks.css";

interface Props {
  deckId: string;
  cards: string[];
  removeCard: (cardId: string) => void;
}

export const Cards = ({ deckId, cards, removeCard }: Props) => {
  const handleDeleteCard = async (cardId: string) => {
    removeCard(cardId);
  };

  return (
    <ul className="ul-container">
      {cards.map((card, index) => (
        <li key={index}>
          <div className="card-item">
            <span>{card}</span>
            <button
              className="delete-button"
              onClick={() => handleDeleteCard(card)}
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
