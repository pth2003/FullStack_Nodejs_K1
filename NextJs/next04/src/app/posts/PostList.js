"use client";
import useSWR from "swr";
import { useEffect } from "react";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const postsApi = `${process.env.SERVER_API}/posts`;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNetwork from "./useNetwork";

const PostList = () => {
  const isOnline = useNetwork();
  useEffect(() => {
    if (!isOnline) {
      toast.warn("Bạn đang offline");
    }
  }, [isOnline]);
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(postsApi, fetcher, {
    refreshInterval: 1000,
    // revalidateOnReconnect: true, ket noi lai khi co mang
  });
  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>failed to load</h1>;
  return (
    <div>
      <h1>Posts</h1>
      {posts?.map(({ title, id }) => {
        return <p key={id}>{title}</p>;
      })}
      <ToastContainer />
    </div>
  );
};

export default PostList;
