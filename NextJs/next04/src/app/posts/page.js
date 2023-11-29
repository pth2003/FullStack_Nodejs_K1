import React from "react";
import PostList from "./PostList";
import PostAdd from "./PostAdd";

const posts = () => {
  return (
    <div>
      <PostList />
      <PostAdd />
    </div>
  );
};

export default posts;
