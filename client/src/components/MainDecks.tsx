import { DECKS } from "../types";
import "../styles/MainDecks.css";
import { Link } from "react-router-dom";

interface Props {
    decks: DECKS[];
    removeDeck: (deckId: string) => void;
}

export const MainDecks = ({ decks, removeDeck }: Props) => {
    const handleDeleteDeck = async (deckId: string) => {
        try {
            await fetch(`http://localhost:3000/decks/${deckId}`, {
                method: "DELETE",
            });
            removeDeck(deckId); // Eliminar localmente después de éxito en la API
        } catch (error) {
            console.error("Error deleting deck:", error);
        }
    };

    return (
        <ul className="ul-container">
            {decks.map((deck) => (
                <li key={deck._id}>
                    <button onClick={() => handleDeleteDeck(deck._id)}>❌</button>
                    <Link to={`/deck/${deck._id}`}>

                        {deck.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
