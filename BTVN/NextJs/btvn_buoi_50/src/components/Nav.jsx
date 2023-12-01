import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="flex gap-3 items-center">
      <li>
        <Link href={"https://www.facebook.com/2720pth."}>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <InstagramIcon />
      </li>
      <li href={"https://github.com/pth2003/FullStack_Nodejs_K1"}>
        <GithubIcon />
      </li>
      <li>
        <ModeToggle />
      </li>
    </ul>
  );
};

export default Nav;
