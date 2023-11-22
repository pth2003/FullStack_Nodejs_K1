import { Container } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AppBar from "~/components/AppBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
import { config } from "~/assets/js/config";
import { client } from "~/assets/js/client";

const Board = () => {
  const { SERVER_API } = config;
  client.setUrl(SERVER_API);
  const [board, setBoard] = useState({ columns: [], tasks: [] });
  const getData = async () => {
    const { data } = await client.get("/tasks", localStorage.getItem("apiKey"));
    if (data.status_code === "SUCCESS") {
      setBoard(data.data);
    }
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  // useLayoutEffectEffect(() => {
  //   console.log(board);
  // }, [board]);
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardContent board={board} />
    </Container>
  );
};

export default Board;
