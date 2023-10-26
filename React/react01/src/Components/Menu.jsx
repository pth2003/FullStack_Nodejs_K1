import React from "react";

const Menu = ({ menu, onReceiveData }) => {
  const hanldClick = () => {
    onReceiveData("Hello F8");
  };
  return (
    <>
      <nav className="menu">
        {menu?.length &&
          menu?.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
      </nav>
      <hr></hr>
      <button onClick={hanldClick}>Click</button>
    </>
  );
};
export default Menu;
// KHONG THE THAY DOI PROPS
