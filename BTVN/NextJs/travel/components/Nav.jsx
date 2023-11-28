import Link from "next/link";
const links = [
  {
    path: "/",
    pathName: "Home",
  },
  {
    path: "/",
    pathName: "Find Hotel",
  },
  {
    path: "/",
    pathName: "About Us",
  },
  {
    path: "/",
    pathName: "Contact Us",
  },
];
const Nav = ({ containerStyles, listStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathName}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
