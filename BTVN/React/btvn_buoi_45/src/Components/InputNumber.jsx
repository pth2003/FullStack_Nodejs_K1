import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { NumberContext } from "./NumberWrapper";

const InputNumber = () => {
  const { handleCheckNumber, handleGuess } = useContext(NumberContext);
  const inputRef = useRef();
  const handleInputChange = (e) => {
    handleCheckNumber(e.target.value);
  };
  useEffect(() => {
    inputRef.current.addEventListener("keypress", (e) => {
      if (!`${e.target.value}${e.key}`.match(/^(0?[1-9]|[1-9][0-9])$/)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
    inputRef.current.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const currentNumber = parseInt(e.target.value, 10) || 0;
        if (currentNumber >= 1 && currentNumber <= 99) {
          e.target.value = (currentNumber + 1).toString();
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        const currentNumber = parseInt(e.target.value, 10) || 0;
        if (currentNumber >= 1 && currentNumber <= 99) {
          e.target.value = (currentNumber - 1).toString();
        }
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key >= "0" && e.key <= "9") {
        inputRef.current.focus();
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess();
    // setGuessHistory((prevHistory) => [...prevHistory, number]);
  };
  // setGuessHistory((prevHistory) => [...prevHistory, e.target.value]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="mb-3">
          Hãy thử nhập một số
        </label>
        <input
          ref={inputRef}
          type="text"
          className="form-control mb-3"
          placeholder="Thử một số"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Kiểm tra
        </button>
      </form>
    </div>
  );
};

export default InputNumber;
