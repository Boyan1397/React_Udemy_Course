import "./index.css";
import { useState } from "react";

const cards = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

function Flashcards(params) {
  const [selectedCardId, setSelectedCardId] = useState(null);

  function handleClick(id) {
    setSelectedCardId(selectedCardId === id ? null : id);
  }

  return (
    <div className="flashcards">
      {cards.map((card) => (
        <div
          className={card.id === selectedCardId ? "selected" : ""}
          onClick={() => handleClick(card.id)}
        >
          <p>{card.id === selectedCardId ? card.answer : card.question}</p>
        </div>
      ))}
    </div>
  );
}
