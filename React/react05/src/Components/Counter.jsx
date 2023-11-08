import React, { useState } from "react";
import Content from "./Content";
import { Color } from "../libs/Color";

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);
  console.log(title);
  return (
    <>
      <h1>Counter : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button>-</button>
      <Content />
    </>
  );
};

export default Color(Counter);
