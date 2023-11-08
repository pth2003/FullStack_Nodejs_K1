import React, { useEffect, useRef, useState, forwardRef } from "react";
import Button from "./Button";

const Search = () => {
  const helloRef = useRef(0);

  const [numder, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(numder + 1);
    helloRef.current++;
    // console.log(numder, helloRef.current);
  };
  //   console.log(helloRef.current);
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    // Thực thi side effect
    console.log(buttonRef.current);
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập từ khóa tìm kiếm" />
      {/* <button type="submit" onClick={handleClick}>
        Click me
      </button> */}

      <Button ref={buttonRef} />
    </div>
  );
};

export default Search;

// ref kha giong state, khac o cho khong re-render
