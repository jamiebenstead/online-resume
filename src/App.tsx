import React from "react";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";
import SkillsAndQualifications from "./components/SkillsAndQualifications";

function App() {
  return (
    <Container maxWidth="container.lg" paddingX={{ base: "4", md: "8" }}>
      <Header />
      <SkillsAndQualifications />
    </Container>
  );
}

export default App;
