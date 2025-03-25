export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );

  const count = items.length;
  const packedCount = items.reduce(
    (sum, item) => sum + (item.packed ? 1 : 0),
    0
  );
  const percentage = Number(Math.round((packedCount / count) * 100));

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${count} items on your list, and you already packed ${packedCount} (${percentage}%)`}
      </em>
    </footer>
  );
}
