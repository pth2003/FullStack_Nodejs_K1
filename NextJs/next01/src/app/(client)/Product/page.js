"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Product = () => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const current = new URLSearchParams(Array.from(searchParams.entries()));
  // const query = current.toString();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = `?keyword=${value}&status=${option}`;
    // console.log(query);
    router.push(`${pathname}${query}`);

    // history.push({
    //   pathname: "/Product",
    //   search: `?keyword=${value}&status=${option}`,
    // });
  };
  return (
    <div>
      Danh sach sản phẩm
      <h3>Trang thai : {searchParams.get("status")}</h3>
      <h3>Trang thai : {searchParams.get("keyword")}</h3>
      <form onSubmit={handleSubmit}>
        <select
          name=""
          id=""
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option value="all">Tat ca</option>
          <option value="active">Kich hoat</option>
          <option value="inactive">Khong kich hoat</option>
        </select>
        <input
          type="search"
          placeholder="tim kiem"
          name="keyword"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>Loc</button>
      </form>
    </div>
  );
};

export default Product;
