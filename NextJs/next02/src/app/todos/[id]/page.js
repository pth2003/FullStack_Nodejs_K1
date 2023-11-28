import React from "react";
import PostDeatils from "./postDetails";
const getTodoDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};
const Detail = async ({ params }) => {
  const { id } = params;
  const data = await getTodoDetails(id);
  console.log(data);
  return (
    <div>
      <PostDeatils {...data} />
    </div>
  );
};

export default Detail;
