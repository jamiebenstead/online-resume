import React from "react";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth="container.lg" paddingX={{ base: "4", md: "8" }}>
      <Header />
    </Container>
  );
}

export default App;
