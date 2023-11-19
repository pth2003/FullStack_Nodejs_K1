import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../redux/actions/todoActions";
import { couterSlice } from "../redux/slice/counterSlice";
const { increment, decrement } = couterSlice.actions;
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
