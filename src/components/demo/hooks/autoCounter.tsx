import { useEffect, useState } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border border-black p-4 rounded-lg">
      <h1>Auto Counter</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default AutoCounter;
