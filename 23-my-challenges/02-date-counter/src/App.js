import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("march 10 25");
  date.setDate(date.getDate() + count);

  return (
    <div className="counter">
      <div className="steps">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0 && "Today is "}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
