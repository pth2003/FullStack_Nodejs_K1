import Image from "next/image";
import Header from "./components/Header";
import { Container, CssBaseline } from "@mui/material";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <Container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Portfolio />
    </Container>
  );
}
