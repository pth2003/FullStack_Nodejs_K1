"use client";
import React, { useState } from "react";
import { fetcher } from "../posts/PostList";
import useSWR from "swr";
import Province from "./Province";
const PROVINCE_API = "http://localhost:3000/api/provinces";
const DISTRICT_API = "http://localhost:3000/api/district";
const INIT_CALLBACK_DATA = {
  data: [],
};
const CheckOut = () => {
  const [code, setCode] = useState(0);

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
      <h1>CheckOut</h1>

      <Province />
    </div>
  );
};

export default CheckOut;
