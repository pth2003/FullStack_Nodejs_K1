import { Container } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AppBar from "~/components/AppBar";
import BoardContent from "./BoardContent/BoardContent";
import { mockData } from "~/apis/mock-data";
import { config } from "~/assets/js/config";
import { client } from "~/assets/js/client";
import { mergeDataToBoard } from "~/utils/mergeData";

const Board = () => {
  const { SERVER_API } = config;
  client.setUrl(SERVER_API);
  const [board, setBoard] = useState({});
  const getData = async () => {
    const { data } = await client.get("/tasks", localStorage.getItem("apiKey"));
    if (data.status_code === "SUCCESS") {
      const { columns, tasks } = data.data;
      setBoard(mergeDataToBoard(columns, tasks));
    }
  };

  useEffect(() => {
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
