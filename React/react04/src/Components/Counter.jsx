import React from "react";
import { useSelector } from "../core/useSelector";
const Counter = () => {
  const { state, dispatch } = useSelector();
  const handleIncre = () => {
    dispatch({
      type: "count/increment",
    });
  };
  const handleDecre = () => {
    dispatch({
      type: "count/decrement",
    });
  };

  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <button onClick={handleDecre}>-</button>
      <button onClick={handleIncre}>+</button>
    </div>
  );
};

export default Counter;
