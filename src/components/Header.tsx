import React from "react";
import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      width="100%"
      padding="16"
      //bg="teal.500"
      color="white"
    >
      <Image
        src="/assets/C0830_121-2 - web.jpg"
        alt="Profile Picture"
        boxSize="160px" // Set size of the image
        borderRadius="full" // Make it circular
        objectFit="cover" // Ensures the image covers the entire box
        objectPosition="top" // Focuses on the top part of the image
        marginRight={{ md: "4" }} // Add right margin on medium+ screens
        marginBottom={{ base: "4", md: "0" }} // Add bottom margin on small screens
      />
      <VStack align={{ base: "center", md: "start" }} spacing="1">
        <Text fontSize="4xl" fontWeight="bold">
          Jamie Benstead
        </Text>
        <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
          Some intro text goes here....
        </Text>
      </VStack>
    </Flex>
  );
};

export default Header;
