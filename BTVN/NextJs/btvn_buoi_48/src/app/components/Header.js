"use client";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Email, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import React from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const Header = () => {
  return (
    <Box position="static">
      <Toolbar>
        <Typography variant="h6">Phan Trung Hiếu</Typography>
        <div style={{ marginLeft: "auto" }}>
          <IconButton component="a" href="mailto:phantrunghieu1412@email.com">
            <Email />
          </IconButton>
          <IconButton
            component="a"
            href={"https://www.facebook.com/pth.2720"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </div>

        <DarkModeToggle />
      </Toolbar>
    </Box>
  );
};

export default Header;
