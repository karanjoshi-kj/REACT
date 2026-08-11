import { useState } from "react";

function Test() {
  const items = ["React", "Node", "MongoDB"];

  const [selected, setSelected] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(items);
    } else {
      setSelected([]);
    }
  };

  const handleItem = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={selected.length === items.length}
          onChange={handleSelectAll}
        />
        Select All
      </label>

      <hr />

      {items.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => handleItem(item)}
          />
          {item}
        </div>
      ))}

      <pre>{JSON.stringify(selected, null, 2)}</pre>
    </>
  );
}

export default App;