import { useState } from "react";

import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";
import Button from "./components/Button";

export default function App() {
  return <TipCalculator></TipCalculator>;
}

function TipCalculator(params) {
  const [billInput, setBillInput] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");

  const tip = billInput * ((percentage1 + percentage2) / 2 / 100);

  function handleReset(params) {
    setBillInput("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <BillInput bill={billInput} onBill={setBillInput} />
      <SelectPercentage percentage={percentage1} onPercentage={setPercentage1}>
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onPercentage={setPercentage2}>
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      {billInput > 0 && (
        <Output
          tip={tip}
          bill={billInput}
          percentage1={percentage1}
          percentage2={percentage2}
        />
      )}
      {billInput > 0 && <Button onReset={handleReset} />}
    </div>
  );
}
