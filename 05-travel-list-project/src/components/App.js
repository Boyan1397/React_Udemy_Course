import { useState } from "react";

import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => id !== item.id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteList(params) {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddNewItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggleItem}
        onClearList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}
