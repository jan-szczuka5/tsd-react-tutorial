import React, { useRef, useState } from "react";

function TaskTwo() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const [firstCounter, setFirstCounter] = useState(0);

  function handleFirstCounter() {
    if (!firstInputRef.current || !firstInputRef.current.value) return;

    setFirstCounter(firstCounter + firstInputRef.current.valueAsNumber);
  }

  function handleSecondCounter() {
    if (!secondInputRef.current || !secondInputRef.current.value) return;

  }

  return (
    <div className="flex items-center flex-col">
      <h1>Task 2 - Basic Hooks</h1>
      <div>
        <p>
          - Create logic for two counters. Each counter has an input field where
          user can provide a number to increase the counter by that number.
        </p>
        <p>
          - Counter 1: Whenever user increases the counter, the value should
          update on the screen.
        </p>
        <p>
          - Counter 2: Whenever user increases the counter, the value should not
          update on the screen until next rerender, no matter how many times
          user increased it.
        </p>
      </div>
      <div className="flex gap-4 mt-12">
        <div className="flex flex-col gap-2">
          <h2>Counter: {firstCounter}</h2>
          <input
            ref={firstInputRef}
            className="border border-black"
            type="number"
            step="0.01"
          />
          <button
            onClick={handleFirstCounter}
            className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          >
            Increase counter 1
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Counter: 0</h2>
          <input
            ref={secondInputRef}
            className="border border-black"
            type="number"
            step="0.01"
          />
          <button
            onClick={handleSecondCounter}
            className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          >
            Increase counter 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskTwo;
