import React, { useEffect, useState } from "react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export const Post = ({ setLength }) => {
  const [data, setData] = useState([]);

  const addPost = (post) => {
    setData([...data, post]);
    // setLength((prev) => prev + 1);
  };
  useEffect(() => {
    setLength(data.length);
  }, [data]);
  return (
    <div className="container py-3">
      <h2>Thông tin bài viết</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
        ea culpa provident dicta. Iusto cupiditate illum mollitia nihil facilis
        eum temporibus fuga et accusamus rem velit, nesciunt quam. Placeat.
      </p>

      <CommentList dataPost={data} />
      <CommentForm addPost={addPost} />
    </div>
  );
};
