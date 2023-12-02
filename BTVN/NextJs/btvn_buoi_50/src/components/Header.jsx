import React from "react";

import Nav from "./Nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 ">
      <Avatar>
        <AvatarImage src="https://cdn-icons-png.flaticon.com/512/1090/1090806.png" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Nav />
    </header>
  );
};

export default Header;
