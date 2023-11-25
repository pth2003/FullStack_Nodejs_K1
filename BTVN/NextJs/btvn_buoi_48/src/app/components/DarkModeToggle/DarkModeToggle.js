"use client";
import React, { useContext } from "react";
import "./darkModeToggle.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../../../context/ThemeContext";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className="container" onClick={toggle}>
      <DarkModeIcon sx={{ fontSize: "14px" }} />
      <LightModeIcon sx={{ fontSize: "14px" }} />
      <div
        className="ball"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
