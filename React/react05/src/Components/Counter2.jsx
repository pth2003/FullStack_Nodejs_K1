import React, { useEffect, useLayoutEffect, useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter2;
// --> useEffect
// state thay đổi
// re-render component
// ui update
// useEffect chạy

// --> useLayoutEffect
// state thay đổi
// re-render component
// useLayoutEffect chạy
// use chạy xong -> UI update
