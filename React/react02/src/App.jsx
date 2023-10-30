import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = form;
    console.log(form);
    console.log(name, email, phone);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleClick}>+</button>
      <hr />
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder="phone..."
            onChange={handleChange}
          />
        </div>
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// class : - render : khi render -> goi lai ham render
// class : react.component : lifecycle,state
// func : khong co state => phai dung thong qua hook
// hook : la 1 function dac biet , chi duoc goi o trong function component
// func bat dau bang chu use
