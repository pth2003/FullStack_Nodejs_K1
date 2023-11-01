import React, { useState } from "react";

export const CommentForm = ({ addPost }) => {
  const [post, setPost] = useState({
    name: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({
      ...post,
      content: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={post.name}
          onChange={(e) => {
            setPost((prev) => ({ ...prev, name: e.target.value }));
          }}
          placeholder="Tên..."
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Nội dung..."
          value={post.content}
          onChange={(e) => {
            setPost((prev) => ({ ...prev, content: e.target.value }));
          }}
        ></textarea>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Bình luận
        </button>
      </div>
    </form>
  );
};
