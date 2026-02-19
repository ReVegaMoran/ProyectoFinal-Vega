import { useEffect, useState } from "react";

function ItemCount({ stock, initial = 1, onAdd }) {
  const safeInitial = initial < 1 ? 1 : initial;
  const [count, setCount] = useState(safeInitial);

  useEffect(() => {
    if (count > stock) setCount(stock);
    if (count < 1) setCount(1);
  }, [count, stock]);

  const add = () => {
    if (count < stock) setCount(count + 1);
  };

  const subtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>

      <button
        className="btn"
        style={{ marginTop: 10, width: "100%" }}
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
