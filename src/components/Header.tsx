import React from "react";
import {
  Flex,
  Image,
  Text,
  VStack,
  useColorMode,
  Box,
  IconButton,
  HStack,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useLinkHoverColor } from "../utils/themeUtils";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor = useLinkHoverColor();

  return (
    <>
      <Flex justifyContent="flex-end" width="100%" padding="4">
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle theme"
        />
      </Flex>
      <Flex
        as="header"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        paddingTop="16"
      >
        <Image
          src="profile-image-web.jpg"
          alt="Profile Picture"
          boxSize="160px"
          borderRadius="full"
          objectFit="cover"
          objectPosition="top"
          aspectRatio={1}
          marginRight={{ md: "4" }}
          marginBottom={{ base: "4", md: "0" }}
          border={"1px"}
          borderColor={"gray.800"}
        />
        <VStack align={{ base: "center", md: "start" }} spacing="1">
          <Text fontSize="5xl" fontWeight="bold">
            Jamie Benstead
          </Text>
          <Text fontSize="l" textAlign={{ base: "center", md: "left" }}>
            I'm a <Box as="b">Full Stack Developer</Box> with over{" "}
            <Box as="b">6 years</Box> of experience - I enjoy building{" "}
            <Box as="i">interactive websites</Box> using tools such as{" "}
            <Box as="u">React, Next.js, Node.js, and GraphQL.</Box>
          </Text>
        </VStack>
      </Flex>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={{ base: 6, md: 4 }}
        justifyItems={{ base: "left", sm: "center" }}
        alignItems="center"
        paddingTop="8"
        paddingX={{ base: "8", sm: "32" }}
        width="100%"
      >
        <HStack
          as="a"
          href="https://github.com/jamiebenstead"
          target="_blank"
          rel="noreferrer"
          sx={{
            transition: "transform 0.2s, color 0.2s",
            color: hoverColor,
            _hover: { transform: "scale(1.1)", color: hoverColor },
          }}
        >
          <Icon as={FaGithubSquare} boxSize="6" />
          <Text>Github</Text>
        </HStack>

        <HStack
          as="a"
          href="https://www.linkedin.com/in/jamie-benstead-2b947112a/"
          target="_blank"
          rel="noreferrer"
          sx={{
            transition: "transform 0.2s, color 0.2s",
            color: hoverColor,
            _hover: { transform: "scale(1.1)", color: hoverColor },
          }}
        >
          <Icon as={BsLinkedin} boxSize="6" />
          <Text>LinkedIn</Text>
        </HStack>

        <HStack
          as="a"
          href="mailto:jamie.benstead@gmail.com"
          download={true}
          sx={{
            transition: "transform 0.2s, color 0.2s",
            color: hoverColor,
            _hover: { transform: "scale(1.1)", color: hoverColor },
          }}
        >
          <Icon as={HiOutlineMail} boxSize="6" />
          <Text>Email</Text>
        </HStack>

        <HStack
          as="a"
          href="Jamie Benstead CV.pdf"
          download={true}
          sx={{
            transition: "transform 0.2s, color 0.2s",
            color: hoverColor,
            _hover: { transform: "scale(1.1)", color: hoverColor },
          }}
        >
          <Icon as={HiDownload} boxSize="6" />
          <Text>Download Resume</Text>
        </HStack>
      </Grid>
    </>
  );
};

export default Header;
