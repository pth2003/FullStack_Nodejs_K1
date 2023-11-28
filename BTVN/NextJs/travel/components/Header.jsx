import React from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToogle";

const Header = () => {
  return (
    <header className="absolute w-full max-w-[1440px] py-8 xl:py-10">
      <div className="container mx-auto">
        {/* desktop  */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">Hotely</h1>
          </Link>
          {/* nav  */}
          <div className="hidden xl:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles="flex items-center justify-between "
                listStyles="flex gap-x-12 text-white"
              />
              <ModeToggle />
              <Button variant="outline" className="px-10 h-[58px]">
                Login
              </Button>
            </div>
          </div>
        </div>
        {/*mobile nav */}
        <div className="xl:hidden absolute right-8 top-8 ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
