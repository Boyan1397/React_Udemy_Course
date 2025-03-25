export default function Item({ itemObj, onDelete, onToggle }) {
  return (
    <li style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onToggle(itemObj.id)}
      ></input>
      <span>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDelete(itemObj.id)}>❌</button>
    </li>
  );
}
