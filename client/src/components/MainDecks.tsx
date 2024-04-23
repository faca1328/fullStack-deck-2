import { DECKS } from "../types"
import "../styles/MainDecks.css"


interface Props {
    decks: DECKS[];
}

export const MainDecks = ({ decks }: Props) => {
    return (
        <ul className="ul-container">
            {decks.map((deck) =>
                <li key={deck._id}>{deck.title}</li>
            )}
        </ul>
    )
}
