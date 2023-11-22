"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("ok");
    router.push("/admin");
  };
  return (
    <div>
      <h1>Trang chu F8</h1>
      <Link href="/Product"> Danh sach san pham</Link>
      <button onClick={handleClick}>Vao trang quan tri</button>
    </div>
  );
};

export default page;
