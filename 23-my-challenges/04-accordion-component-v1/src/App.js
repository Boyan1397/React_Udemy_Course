import "./index.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [currOpen, setIsCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <Item
          num={index}
          title={el.title}
          text={el.text}
          key={el.title}
          currOpen={currOpen}
          setIsCurrOpen={setIsCurrOpen}
        />
      ))}
    </div>
  );
}

function Item({ num, title, text, currOpen, setIsCurrOpen }) {
  function handleClick(params) {
    setIsCurrOpen(isOpen ? null : num);
  }

  const isOpen = num === currOpen;

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleClick}>
      <p className="number">{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
