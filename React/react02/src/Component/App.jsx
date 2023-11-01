import React, { useState } from "react";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";

export const AppContext = React.createContext();
const App = () => {
  const [title, setTitle] = useState("");
  const data = {
    name: "trung Hieu",
    email: "abc@gmail.com",
    title,
  };
  const handleUpdateTitle = (value) => {
    setTitle(value);
  };
  return (
    <AppContext.Provider value={{ data, handleUpdateTitle }}>
      <ComponentA />
      <ComponentB></ComponentB>
    </AppContext.Provider>
  );
};

export default App;
