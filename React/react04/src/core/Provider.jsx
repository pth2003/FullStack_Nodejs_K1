import React, { createContext, useReducer, useState } from "react";
import { rootReducer } from "./rootReducer";
export const ProviderContext = createContext();
export default function Provider({ children }) {
  const initState = {
    listMessage: [],
  };
  const [state, dispatch] = useReducer(rootReducer, initState);

  return (
    <ProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContext.Provider>
  );
}
