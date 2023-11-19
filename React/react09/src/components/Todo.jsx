import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/middlewares/fetchTodo";

const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch toi middleware -> de middleware call api roi dispatch toi store
    dispatch(fetchTodo());
  }, []);
  const todoList = useSelector((state) => {
    return state.todo.todoList;
  });
  console.log(todoList);
  return <h1>Todo App</h1>;
};

export default Todo;
