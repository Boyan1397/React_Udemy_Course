export default function Output({ tip, bill, percentage1, percentage2 }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
