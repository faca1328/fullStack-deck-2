import "../styles/MainDecks.css";

interface Props {
    cards: string[];
    removeCard: (cardId: string) => void;
}

export const Cards = ({ cards, removeCard }: Props) => {
    const handleDeleteCard = async (cardId: string) => {
        removeCard(cardId);
    };

    return (
        <ul className="ul-container">
            {cards.map((card, index) => (
                <li key={index}>
                    <button onClick={() => handleDeleteCard(card)}>❌</button>
                    {/* Aca hay un problema */}
                    {card}
                </li>
            ))}
        </ul>
    );
};
