import React from "react";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";
import SkillsAndQualifications from "./components/SkillsAndQualifications";
import WorkHistory from "./components/WorkHistory";
import Eduction from "./components/Eduction";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Container maxWidth="container.lg" paddingX={{ base: "4", md: "8" }}>
      <Header />
      <SkillsAndQualifications />
      <WorkHistory />
      <Eduction />
      <AboutMe />
    </Container>
  );
}

export default App;
