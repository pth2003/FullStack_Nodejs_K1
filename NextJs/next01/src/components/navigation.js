"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, []);
  return (
    <div>
      <ul className="menu">
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chu</Link>
        </li>
        <li className={clsx(pathname === "/Product" && "active")}>
          <Link href="/Product">San pham</Link>
        </li>
        <li className={clsx(pathname === "/tin-tuc" && "active")}>
          <Link href="/tin-tuc">Tin tuc</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
