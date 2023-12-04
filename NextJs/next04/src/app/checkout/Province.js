"use client";
import styles from "./checkout.module.scss";
import React, { useState } from "react";
import { fetcher } from "../posts/PostList";
import useSWR from "swr";
const PROVINCE_API = "http://localhost:3000/api/provinces";
const DISTRICT_API = "http://localhost:3000/api/district";
const INIT_CALLBACK_DATA = {
  data: [],
};
const Province = () => {
  const [code, setCode] = useState(0);
  // console.log(process.env.SERVER_API);
  const { data: province } = useSWR(PROVINCE_API, fetcher, {
    fallbackData: INIT_CALLBACK_DATA,
  });
  const { data: district } = useSWR(
    `${DISTRICT_API}?province_id=${code}`,
    fetcher
    // {
    //   fallbackData: INIT_CALLBACK_DATA,
    // }
  );
  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => {
          setCode(e.target.value);
        }}
        className={styles.select}
      >
        <option value="">Chọn Tỉnh/Thành Phố</option>
        {province?.data.map((item, index) => {
          return (
            <option value={item.code} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select name="" id="" className={styles.select}>
        <option value="">Chọn Quận/Huyện</option>
        {district?.map((item, index) => {
          return (
            <option value={item.code} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Province;
