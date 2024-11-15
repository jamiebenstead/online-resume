import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { useBgColor } from "../utils/themeUtils";
import { motion } from "framer-motion";

const SectionBox = ({ children }: BoxProps) => {
  const bgColor = useBgColor();

  return (
    <Box
      as={motion.section}
      padding="8"
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      maxW="container.lg"
      mx="auto"
      my="8"
      whileHover={{ scale: 1.02 }}
      transition="0.2s linear"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </Box>
  );
};

export default SectionBox;
