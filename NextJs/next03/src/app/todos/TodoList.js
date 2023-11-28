import React from "react";
export const todoApi = `http://localhost:3005/todos`;
const getTodos = async () => {
  const res = await fetch(todoApi, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
};
const TodoList = async () => {
  const todoList = await getTodos();

  return (
    <div>
      <ul>
        {todoList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
