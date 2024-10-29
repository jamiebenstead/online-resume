import React from "react";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";
import SkillsAndQualifications from "./components/SkillsAndQualifications";
import WorkHistory from "./components/WorkHistory";

function App() {
  return (
    <Container maxWidth="container.lg" paddingX={{ base: "4", md: "8" }}>
      <Header />
      <SkillsAndQualifications />
      <WorkHistory />
    </Container>
  );
}

export default App;
