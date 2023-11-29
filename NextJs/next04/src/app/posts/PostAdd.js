"use client";

import { useState } from "react";
import { postsApi } from "./PostList";
import { useSWRConfig } from "swr";
const PostAdd = () => {
  const { mutate } = useSWRConfig();
  const [value, setValue] = useState("");
  const addPost = async (data) => {
    const res = await fetch(postsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      mutate(postsApi);
      setValue("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title: value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="them post"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default PostAdd;
