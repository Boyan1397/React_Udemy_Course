import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(params) {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps(params) {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious(params) {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }

  function handleNext(params) {
    if (step < 3) setStep((prevStep) => prevStep + 1);

    // setStep((s) => s + 1);
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => setOpen((prevIsOpen) => !prevIsOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step{step}: {messages[step - 1]}
          </p> */}

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>👈</span>
              Previous
            </Button>

            <Button onClick={handleNext}>
              Next
              <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#7950f2",
        color: "#fff",
      }}
    >
      {children}
    </button>
  );
}

function Message({ children, step }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
