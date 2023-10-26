import React from "react";
import Header from "./Components/Header";
function App() {
  const isPrimary = true;
  const handleClick = (text) => {
    console.log(`Hello ${text}`);
  };
  const Product = () => {
    return <h2>Danh sách sản phẩm</h2>;
  };

  const isLogin = true;

  // render 1 danh sach

  const lists = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <>
      {/* React.Fragment : ẩn thẻ bọc mọi thứ 
          React.Fragment  viết tắt : <></>
      */}
      <h1>Xin chao F8</h1>
      {lists.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      {isLogin ? (
        <h2>Chao mung quay tro lai</h2>
      ) : (
        <h3>Dang nhap de tiep tuc</h3>
      )}
      <Product />
      {/* && : neu truoc true thi chay cai sau */}
      {isLogin && (
        <ul className="menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      )}

      <button
        className={`${isPrimary ? "btn" : ""}`}
        onClick={() => {
          handleClick("Phan Trung Hieu");
        }}
      >
        Click Me!
      </button>
    </>
  );
}

export default App;
