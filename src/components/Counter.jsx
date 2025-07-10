import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className=" card ">
      <h2 className="card text-2xl">{count}</h2>
      <div className="space-x-2">
        <button onClick={increaseCount} className="button">
          Increase
        </button>
        <button onClick={decreaseCount} className="button">
          Decrease
        </button>
        <button onClick={resetCount} className=" button">
          Reset
        </button>
      </div>
    </div>
  );
}
