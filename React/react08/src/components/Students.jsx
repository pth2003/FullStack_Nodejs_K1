import React from "react";
import db from "../assets/db.json";
import { useState, useTransition } from "react";
const Students = () => {
  const [keyword, setKeyword] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleSearch = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };
  console.log(isPending);
  return (
    <div>
      <input type="search" placeholder="Search..." onChange={handleSearch} />
      <h3>Danh sach sinh vien</h3>
      {db.map(({ fullName, id }) => {
        if (
          keyword !== "" &&
          fullName.toLowerCase().includes(keyword.toLowerCase())
        ) {
          return (
            <h4 key={id} style={{ background: "yellow" }}>
              {fullName}
            </h4>
          );
        }
        return <h4 key={id}>{fullName}</h4>;
      })}
    </div>
  );
};

export default Students;
