import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoAdd2 from "./TodoAdd2";

const Todos = () => {
  return (
    <>
      <h1>Todos app</h1>
      <TodoList />
      {/* <TodoAdd /> */}
      <TodoAdd2 />
    </>
  );
};

export default Todos;
