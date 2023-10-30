import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  //   const getto
  //   useEffect(() => {
  //     console.log("f8");
  //     return
  //   }, []);
  //   useEffect(() => {
  //     console.log("Update..");
  //   });
  //   useEffect(() => {
  //     console.log("count...");
  //   }, [count]);

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
