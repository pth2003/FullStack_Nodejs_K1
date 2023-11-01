import React from "react";
import { AppContext } from "./App";
export const ComponentA = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return <h1>Component A</h1>;
      }}
    </AppContext.Consumer>
  );
};
