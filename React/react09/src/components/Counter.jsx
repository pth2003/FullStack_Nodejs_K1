import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/todoActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const handleIncrement = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

// useDispatch -> tra ve ham dispatch
// useSelector -> get state golbal
