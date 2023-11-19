import React, { useCallback, useState } from "react";

const MoneyHistories = ({ histories, total, handleDelete }) => {
  //   const handleDelete = () => {
  //     console.log("f8");
  //   };

  console.log("Re-render");
  return (
    <div>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item}đ</h3>
      ))}
      <h2>Tổng tiền : {total}</h2>
      <button onClick={handleDelete}>Xóa lịch sử</button>
    </div>
  );
};

export default React.memo(MoneyHistories);
