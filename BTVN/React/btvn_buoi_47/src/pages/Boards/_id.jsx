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

  // useLayoutEffectEffect(() => {
  //   console.log(board);
  // }, [board]);
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
