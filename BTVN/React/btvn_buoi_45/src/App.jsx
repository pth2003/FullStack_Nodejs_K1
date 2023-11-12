import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import NumberWrapper from "./Components/NumberWrapper";
function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  // useEffect(() => {
  //   // window.addEventListener("storage", () => {
  //   //   setTheme(JSON.parse(localStorage.getItem("isDark")));
  //   // });
  //   async function init() {
  //     const data = await localStorage.getItem("isDark");
  //     setTheme(JSON.parse(data));
  //   }
  //   init();
  // }, []);
  return (
    <div className={`${theme ? "dark-mode" : "light-mode"}`}>
      <NumberWrapper />
    </div>
  );
}

export default App;
