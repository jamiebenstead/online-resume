import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { useBgColor } from "../utils/themeUtils";

const SectionBox = ({ children }: BoxProps) => {
  const bgColor = useBgColor();

  return (
    <Box
      as="section"
      padding="8"
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      maxW="container.lg"
      mx="auto"
      my="8"
    >
      {children}
    </Box>
  );
};

export default SectionBox;
