import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="border border-black p-4 rounded-lg">
      <div>
        <h1>Counter</h1>
      </div>
      <button
        onClick={handleClick}
        className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
      >
        You pressed me {count} times
      </button>
    </div>
  );
}

export default Counter;
