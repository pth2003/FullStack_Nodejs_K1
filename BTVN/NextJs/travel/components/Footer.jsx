"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary dark:bg-grey relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col xl:flex-row bg-white dark:bg-black p-8 rounded-xl min-h-[394px]  xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum provident, vero labore ut odio voluptatum commodi illum
                beatae dolorem officia?
              </p>
            </div>

            {/* navigation & contact */}
            <div className="flex xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg ">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Find Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact US</h4>
                <ul className="flex flex-col gap-y-6 text-lg ">
                  <li>+84 1125 2202</li>
                  <li>pth@gmail.com</li>
                  <li>pth.web.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
