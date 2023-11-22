import { Box, SvgIcon, Typography, Button } from "@mui/material";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
// import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Trello from "~/assets/trello.svg?react";
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {/* <SvgIcon component={Trello} inheritViewBox sx={{ color: "white" }} /> */}
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.removeItem("apiKey");
          }}
        >
          Đăng xuất
        </Button>
      </Box>
    </Box>
  );
}

export default AppBar;
