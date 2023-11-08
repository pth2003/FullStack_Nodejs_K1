import React, { useId } from "react";

const Input = ({ title }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}`}>{title}</label>
      <input type="text" placeholder="" id={`${id}`} />
    </div>
  );
};

export default Input;
