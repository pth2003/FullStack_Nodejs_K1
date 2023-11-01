import React from "react";

export const CommentList = ({ dataPost }) => {
  return (
    <div className="py-3">
      <h3>Bình luận</h3>

      {dataPost.map((data, index) => (
        <div className="mb-3" key={index}>
          <h5>{data.name}</h5>
          <p>{data.content}</p>
        </div>
      ))}
    </div>
  );
};
