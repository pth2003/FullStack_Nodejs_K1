import React from "react";
import { useReducer } from "react";
import { useState } from "react";

export default function Counter() {
  // action : la 1 obj gom type : ten hanh dong ; va payload : du lieu cua hanh dong
  const reducer = (state, action = {}) => {
    switch (action.type) {
      // type : feature/action
      case "count/increment": {
        return { ...state, count: state.count + 1 };
      }
      case "count/decrement": {
        return { ...state, count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const handleIncrement = () => {
    dispatch({ type: "count/increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "count/decrement" });
  };
  return (
    <div>
      <h1>Counter :{state.count} </h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
// reduce , useState, context
// buoi sau : Build store state su dung useReducer + react context
// action
// actionCreator
// selector
// dispatch
// call api -> set state bang useReducer -> thong qua middleware => closure
