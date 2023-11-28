"use client";
import React, { useState } from "react";
import { todoApi } from "./TodoList";
import { useRouter } from "next/navigation";
const TodoAdd = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    postTodo({ name });
  };
  const postTodo = async (data) => {
    const res = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.refresh();
      setName("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ten cong viec"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Them</button>
      </form>
    </div>
  );
};

export default TodoAdd;
