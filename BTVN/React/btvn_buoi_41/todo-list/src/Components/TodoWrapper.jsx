import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { config } from "../assets/js/config";
import { client } from "../assets/js/client";
import Loading from "./Loading";
import { EditTodoForm } from "./EditTodoForm";
import { SearchForm } from "./SearchForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isUpdate, setUpdate] = useState(false);
  const [id, setId] = useState(0);
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
  const toggleComplete = async (id) => {
    setLoading(true);
    const todo = todos.find((todo) => todo._id === id);
    const { data } = await client.patch(
      `/todos/${id}`,
      { isCompleted: !todo.isCompleted },
      apiKey
    );
    if (data.status_code === "SUCCESS") {
      getTodo();
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    setLoading(true);
    const { data } = await client.delete(`/todos/${id}`, apiKey);
    if (data.status_code === "SUCCESS") {
      getTodo();
      setLoading(false);
    }
  };
  const handleEdit = (id) => {
    setId(id);
    setUpdate(!isUpdate);
    console.log(isUpdate);
  };
  const editTodo = async (todo) => {
    setLoading(true);
    const { data } = await client.patch(`/todos/${id}`, { todo }, apiKey);

    if (data.status_code === "SUCCESS") {
      getTodo();
      setUpdate(!isUpdate);
      setLoading(false);
    }
  };
  const searchTodo = async (query) => {
    const queryUrl = query.replaceAll(" ", "+");
    setLoading(true);
    const { data } = await client.get(`/todos?q=${queryUrl}`, apiKey);
    console.log(data);
    if (data.status_code === "SUCCESS") {
      setTodos(data.data.listTodo);
      setLoading(false);
    }
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>

      {isUpdate ? (
        <EditTodoForm editTodo={editTodo} />
      ) : (
        <TodoForm addTodo={addTodo} />
      )}
      <SearchForm searchTodo={searchTodo} />
      {isLoading ? (
        <Loading />
      ) : (
        todos.map((task) => (
          <Todo
            task={task}
            key={task._id}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};
export default TodoWrapper;
