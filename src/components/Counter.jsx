import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
