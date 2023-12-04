import Image from "next/image";
import { myFont } from "./layout";

export default function Home() {
  return (
    <>
      <h1> Home page</h1>
      {/* <Image
        src="/assets/images/spider.png"
        width={300}
        height={450}
        priority={100}
        alt=""
      /> */}
      <Image
        src={"https://picsum.photos/200"}
        width={200}
        height={200}
        alt=""
        priority={100}
      />
      <h2 className={myFont.className}>Phan Trung Hieu</h2>
    </>
  );
}
