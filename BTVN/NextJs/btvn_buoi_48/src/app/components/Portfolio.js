"use client";
import React, { useContext, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Paper,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

import Header from "./Header";
import { ThemeContext } from "../../../context/ThemeContext";

const Portfolio = () => {
  const { mode } = useContext(ThemeContext);

  const backgroundColor = mode === "dark" ? "#333" : "#fff";
  const color = mode === "dark" ? "#fff" : "#333";

  return (
    <Container>
      <Header />

      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Phan Trung Hiếu
      </Typography>

      <Grid container>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 1,
              border: "1px solid #000",
              borderRadius: "5px",
              mx: "10px",
            }}
          >
            <img
              src="https://bloganchoi.com/wp-content/uploads/2021/11/spiderman-no-way-home-trailer-giai-thich-7.jpg"
              alt="Profile"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Học viên F8
            </Typography>

            <Paper style={{ padding: "20px", backgroundColor, color }}>
              <Typography variant="h5">Giới Thiệu Chi Tiết</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: "20px", backgroundColor, color }}>
            <Typography variant="h4" textAlign="center">
              Bài tập về nhà
            </Typography>

            <Card sx={{ my: 2, backgroundColor, color }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  React Simple Movie
                </Typography>
                <Typography variant="body1">Website giới thiệu phim</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://react-simple-movie-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: "10px" }}
                >
                  Demo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ my: 2, backgroundColor, color }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Trello
                </Typography>
                <Typography variant="body1">
                  Website quản lý công việc
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://btvn-buoi-47.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: "10px" }}
                >
                  Demo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/React/btvn_buoi_47"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ my: 2, backgroundColor, color }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Soppi
                </Typography>
                <Typography variant="body1">Website bán hàng</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  href="https://btvn-buoi-46.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: "10px" }}
                >
                  Demo
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://github.com/pth2003/FullStack_Nodejs_K1/tree/main/BTVN/React/btvn_buoi_46"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
            {/* Thêm danh sách các dự án đã làm */}
          </Paper>
        </Grid>
      </Grid>
      {/* Add more projects as needed */}
    </Container>
  );
};

export default Portfolio;
