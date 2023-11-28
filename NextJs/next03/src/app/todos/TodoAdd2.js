import React from "react";
import { todoApi } from "./TodoList";
import { revalidatePath } from "next/cache";

const TodoAdd2 = () => {
  const postTodo = async (data) => {
    "use server";
    const res = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log(res);
    }
  };
  const addTodo = async (formData) => {
    "use server";
    const name = formData.get("name");
    await postTodo({ name });
    revalidatePath("/todos");
  };

  return (
    <div>
      <form action={addTodo}>
        <input type="text" name="name" placeholder="Ten cong viec" />
        <button>Them</button>
      </form>
    </div>
  );
};

export default TodoAdd2;
