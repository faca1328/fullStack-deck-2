import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "./Cards";
import { CardsForm } from "./CardsForm";
import { DECKS } from "../types";

export function Deck() {
  const [deck, setDeck] = useState<DECKS | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const { deckId } = useParams();

  
  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;

      await fetch(`http://localhost:3000/decks/${deckId}`)
        .then((response) => response.json())
        .then((data) => {
          setDeck(data);
          setCards(data.cards || []); // Asegurarse de manejar cards vacíos
        })
        .catch((err) => console.log(err));
    }

    fetchDeck();
  }, [deckId]);



  const addNewCard = async (newCard: string) => {
    try {
      const response = await fetch(`http://localhost:3000/decks/${deckId}/cards`, {
        method: "POST",
        body: JSON.stringify({ text: newCard }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to add new card");
      }
      setCards([...cards, newCard]);
    } catch (error) {
      console.error("Error adding new card:", error);
    }
  };

  const removeCard = async (cardId: string) => {
    try {
      await fetch(`http://localhost:3000/decks/${deckId}/cards/${cardId}`, {
        method: "DELETE",
      });
      setCards(cards.filter((card) => card !== cardId));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };



  return (
    <>
      <h1>{deck?.title}</h1>
      <Cards cards={cards} removeCard={removeCard} />
      <CardsForm addNewCard={addNewCard} />
    </>
  );
}
