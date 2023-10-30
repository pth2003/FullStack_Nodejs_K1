import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import Loading from "./Loading";
uuidv4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { SERVER_API } = config;
  client.setUrl(SERVER_API);
  const apiKey = localStorage.getItem("apiKey");
  const getTodo = async () => {
    const { data } = await client.get("/todos", apiKey);
    if (data.status_code === "SUCCESS") {
      setTodos(data.data.listTodo);
      setLoading(false);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async (todo) => {
    setLoading(true);
    const { data } = await client.post("/todos", { todo }, apiKey);
    if (data.status_code === "SUCCESS") {
      getTodo();
      setLoading(false);
    }
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {isLoading ? (
        <Loading />
      ) : (
        todos.map(({ _id, todo }) => <Todo task={todo} key={_id} />)
      )}
    </div>
  );
};
export default TodoWrapper;
