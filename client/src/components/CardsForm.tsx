import React, { useState } from "react";

interface Props {
    deckId: string;
    addNewCard: (newCard: string) => void;
}


export const CardsForm = ({ addNewCard, deckId }: Props) => {
    const [text, setText] = useState("");

    const handleCreateCard = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch(`http://localhost:3000/decks/${deckId}/cards`, {
            method: "POST",
            body: JSON.stringify({ text }),
            headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
            .then((data) => {
                addNewCard(data.text); 
                setText("");
            })
            .catch((error) => console.log(error));
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
            <hr />
            <h1>{text}</h1>
        </form>
    );
};
