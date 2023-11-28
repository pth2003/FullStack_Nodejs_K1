import React from "react";
const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const TodoLists = async () => {
  const todos = await getTodo();
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default TodoLists;
