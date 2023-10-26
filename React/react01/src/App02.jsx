import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
export default function App() {
  const user = {
    name: "Hieu",
    email: "abc@gmail.com",
    age: 20,
  };
  return (
    <div>
      <h1>Title</h1>
      <Header title="danh sach san pham" {...user} />
      <Footer>
        <h3>Childrend props</h3>
      </Footer>
    </div>
  );
}

// rcc : class
// rfc : function
