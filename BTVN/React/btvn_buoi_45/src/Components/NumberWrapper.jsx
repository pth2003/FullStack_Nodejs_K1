import React, { createContext, useEffect, useState } from "react";
import InputNumber from "./InputNumber";
import MAX_TIME, { RANGE_NUMBER } from "../config";
import TableResult from "./TableResult";

export const NumberContext = React.createContext();
const NumberWrapper = () => {
  const [number, setNumber] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());
  const [mess, setMess] = useState("Chào mừng bạn đến với trò chơi đoán số!");
  const [attempts, setAttempts] = useState(MAX_TIME);
  const [guessHistory, setGuessHistory] = useState([]);
  const [roundHistory, setRoundHistory] = useState(
    JSON.parse(localStorage.getItem("roundHistory")) || []
  );
  const [isCorrect, setCorrect] = useState(true);
  const [table, setTable] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  const maxAttempts = MAX_TIME;

  function randomNumber() {
    return Math.floor(Math.random() * 99) + 1;
  }
  const handleCheckNumber = (value) => {
    setNumber(value);
  };
  const handleGuess = () => {
    const guess = parseInt(number, 10);
    setAttempts(attempts - 1);
    if (guess === secretNumber) {
      setMess("Bạn đã đoán đúng");
      setSecretNumber(randomNumber());
      // setAttempts(maxAttempts);
      setCorrect(false);
    } else if (attempts === 1) {
      setMess(`Bạn đã hết số lần đoán. Số đúng là ${secretNumber}`);
      // setAttempts(maxAttempts);
    } else {
      setMess(
        guess < secretNumber ? "Số bạn đoán nhỏ hơn." : "Số bạn đoán lớn hơn."
      );
    }
    // console.log(attempts);

    setGuessHistory((prevHistory) => [...prevHistory, +number]);
    // setNumber(0);
  };
  const handleNewRound = () => {
    setRoundHistory((prevHistory) => [...prevHistory, guessHistory]);
    setGuessHistory([]);
  };
  const handleDelete = () => {
    setTable(false);
    localStorage.removeItem("roundHistory");
    setRoundHistory([]);
  };

  // useEffect(() => {
  //   console.log(table);
  // }, [table]);
  useEffect(() => {
    // console.log(localStorage.getItem("roundHistory").length);
    localStorage.setItem("roundHistory", JSON.stringify(roundHistory));
    if (JSON.parse(localStorage.getItem("roundHistory")).length !== 0) {
      setTable(true);
    }
  }, [roundHistory]);
  // useEffect(() => {
  //   console.log(roundHistory);
  // }, [roundHistory]);
  useEffect(() => {
    localStorage.setItem("isDark", isDarkMode);
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`container mt-5 `}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <NumberContext.Provider value={{ handleCheckNumber, handleGuess }}>
        <h1>{mess}</h1>
        <h2>
          Còn {attempts}/{maxAttempts} lần
        </h2>
        <h2>Bạn cần tìm kiếm một số từ 1 đến {RANGE_NUMBER - 1}</h2>

        {attempts !== 0 && isCorrect ? (
          <InputNumber />
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setAttempts(maxAttempts);
              setCorrect(true);
              setMess("Chào mừng bạn đến với trò chơi đoán số!");
              handleNewRound();
            }}
          >
            Chơi lại!
          </button>
        )}
        <div>
          <button className="btn btn-danger mt-3" onClick={handleDelete}>
            Xóa lịch sử
          </button>
        </div>
        {table ? <TableResult /> : ""}
      </NumberContext.Provider>
    </div>
  );
};

export default NumberWrapper;
