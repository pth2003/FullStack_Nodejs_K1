import React, { useContext } from "react";
import { AppContext } from "./App";
import ComponentC from "./ComponentC";
export const ComponentB = () => {
  const context = useContext(AppContext);

  return (
    <div>
      <h1>Component B</h1>
      <h2>{context.data.title}</h2>
      <ComponentC />
    </div>
  );
};
