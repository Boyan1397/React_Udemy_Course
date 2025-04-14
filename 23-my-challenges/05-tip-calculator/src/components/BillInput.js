export default function BillInput({ bill, onBill }) {
  function handleInput(e) {
    onBill(Number(e.target.value));
  }

  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={handleInput}
      ></input>
    </div>
  );
}
