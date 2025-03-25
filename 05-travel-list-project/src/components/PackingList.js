import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDelete,
  onToggle,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedArr;

  if (sortBy === "input") sortedArr = items;

  if (sortBy === "description")
    sortedArr = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "status")
    sortedArr = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedArr.map((item) => (
          <Item
            itemObj={item}
            onDelete={onDelete}
            onToggle={onToggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description </option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
