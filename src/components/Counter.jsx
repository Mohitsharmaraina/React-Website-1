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
    <div className=" h-50 bg-slate-300 text-center justify-center ">
      <h2 className="text-2xl ">Counter</h2>
      <h2 className="w-10 h-10 bg-slate-100 p-3 ml-[49%] mt-5 mb-5 rounded-lggit">
        {count}
      </h2>
      <div className="space-x-8">
        <button
          onClick={increaseCount}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-green-400 hover:bg-green-300 active:bg-green-400 hover:text-black "
        >
          Increase
        </button>
        <button
          onClick={decreaseCount}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-red-400 hover:bg-red-300 active:bg-red-400 hover:text-black "
        >
          Decrease
        </button>
        <button
          onClick={resetCount}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-gray-500 hover:bg-gray-400 active:bg-gray-500 hover:text-black "
        >
          Reset
        </button>
      </div>
    </div>
  );
}
