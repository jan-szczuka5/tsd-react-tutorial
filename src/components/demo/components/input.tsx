import { useRef } from "react";

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (!inputRef.current) return;
    console.log(inputRef.current.value);
  }

  return (
    <div className="border border-black p-4 rounded-lg">
      <div>
        <h1>Input</h1>
      </div>
      <input
        ref={inputRef}
        placeholder="Enter the value here"
        className="border border-black mr-4"
      />
      <button
        onClick={handleClick}
        className="border border-black rounded-md py-2 px-4 bg-gray-200 hover:bg-gray-300"
      >
        Print input value
      </button>
    </div>
  );
}

export default Input;
