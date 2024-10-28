import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const SkillsAndQualifications = () => {
  // Define color values for light and dark mode
  const iconColor = useColorModeValue("green.500", "green.300");
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const listItemHoverColor = useColorModeValue("gray.100", "gray.600");

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
      <Flex paddingBottom="4">
        <Heading as="h2" fontSize="3xl" fontWeight="bold">
          Skills and Qualifications
        </Heading>
      </Flex>
      <Flex paddingTop="4">
        <List spacing="4" width="100%">
          <ListItem
            _hover={{ bg: listItemHoverColor }}
            padding="4"
            borderRadius="md"
            transition="background-color 0.2s"
          >
            <HStack align="start">
              <Icon as={FaCheck} color={iconColor} boxSize="5" />
              <Text fontSize="lg" fontWeight="medium">
                Over 6 years of Full-Stack Development Experience
              </Text>
            </HStack>
          </ListItem>

          <ListItem
            _hover={{ bg: listItemHoverColor }}
            padding="4"
            borderRadius="md"
            transition="background-color 0.2s"
          >
            <HStack align="start">
              <Icon as={FaCheck} color={iconColor} boxSize="5" />
              <Text fontSize="lg" fontWeight="medium">
                Skilled in Modern Technologies: React, NextJS, TypeScript
              </Text>
            </HStack>
          </ListItem>

          <ListItem
            _hover={{ bg: listItemHoverColor }}
            padding="4"
            borderRadius="md"
            transition="background-color 0.2s"
          >
            <HStack align="start">
              <Icon as={FaCheck} color={iconColor} boxSize="5" />
              <Text fontSize="lg" fontWeight="medium">
                Strong Background in Test-Driven Development, Unit Testing, and
                QA Processes
              </Text>
            </HStack>
          </ListItem>

          <ListItem
            _hover={{ bg: listItemHoverColor }}
            padding="4"
            borderRadius="md"
            transition="background-color 0.2s"
          >
            <HStack align="start">
              <Icon as={FaCheck} color={iconColor} boxSize="5" />
              <Text fontSize="lg" fontWeight="medium">
                Proven Track Record in Project Management and Agile Development
              </Text>
            </HStack>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};

export default SkillsAndQualifications;
