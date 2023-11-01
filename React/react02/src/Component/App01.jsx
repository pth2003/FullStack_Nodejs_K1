import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Post } from "./Post/Post";
import { Notification } from "./Notification";

export default function App() {
  // const [count, setCount] = useState(0);

  // const [todoList, setTodoList] = useState([]);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

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
  const [length, setLength] = useState(0);
  // const addLenght = (length) => {
  //   setLength(length);
  // };
  return (
    <div>
      <div className="container">
        <Notification length={length} />
      </div>

      <Post setLength={setLength} />
      {/* <h1>Count : {count} </h1>
      <button onClick={handleClick}>+</button> */}
    </div>
  );
}

// tạo đối tượng context : react.context
// provider : compnent có sẵn của context, dùng để gửi dữ liệu tới các component con
// consumer : nhận dữ liệu từ provider (hook : useContext)
// context nâng cao : xây dựng state manager kết hợp với useReducer

// hai loại state : local state: là nội bộ compnent  và global state : là kho lưu trữ state mà các compnent khác có thể sử dụng
