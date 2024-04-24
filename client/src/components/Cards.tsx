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
          <div className="card-item">
            {/* Aca hay un problema */}
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
