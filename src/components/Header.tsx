import React from "react";
import {
  Flex,
  Image,
  Text,
  VStack,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "light"}
      </Button>

      <Flex
        as="header"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding="16"
      >
        <Image
          src="/assets/C0830_121-2 - web.jpg"
          alt="Profile Picture"
          boxSize="160px"
          borderRadius="full"
          objectFit="cover"
          objectPosition="top"
          marginRight={{ md: "4" }}
          marginBottom={{ base: "4", md: "0" }}
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
    </>
  );
};

export default Header;
