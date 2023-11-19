import React, { useCallback, useMemo, useState } from "react";
import MoneyHistories from "./MoneyHistories";

const MoneyTransfer = () => {
  const [histories, setHistories] = useState([]);
  const [cost, setCost] = useState(0);
  const handleChange = (e) => {
    setCost(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, +cost]);
    setCost("");
  };
  const handleDelete = useCallback(() => {
    setHistories([]);
  }, []);
  const total = useMemo(
    () =>
      histories.reduce((acc, cur) => {
        console.log("total");
        return acc + cur;
      }, 0),
    [histories]
  );

  // Giai phap : cache gia tri cua bien total
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="So tien..."
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
      </form>
      <MoneyHistories
        histories={histories}
        total={total}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MoneyTransfer;

// useMemo(callback,deps) : cache gía trị tính toán qua  mỗi lần re-render
// -> trả về giá trị
// callback phải có return
// áp dụng cho các  biểu thức logic

// useCallback : cache func qua moi lan re-render
// callback khong co return
// ap dung cho viec khoi tao ham
