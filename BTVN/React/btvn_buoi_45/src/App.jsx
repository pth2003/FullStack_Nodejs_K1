import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import NumberWrapper from "./Components/NumberWrapper";
function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };
  // useEffect(() => {
  //   localStorage.setItem("isDark", isDarkMode);
  // }, [isDarkMode]);
  return (
    <div>
      {/* <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}
      <NumberWrapper />
    </div>
  );
}

export default App;
