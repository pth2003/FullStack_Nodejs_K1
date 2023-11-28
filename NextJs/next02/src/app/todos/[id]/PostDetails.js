"use client";
import React from "react";

const PostDeatils = ({ title, body }) => {
  return (
    <div>
      <h1> {title}</h1>
      <h3> {body}</h3>
      <hr />
      <button>Thu gon</button>
    </div>
  );
};

export default PostDeatils;
