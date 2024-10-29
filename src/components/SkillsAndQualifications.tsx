import React from "react";
import {
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { skills } from "../data/skillsData";
import SectionHeader from "./SectionHeader";

const SkillsAndQualifications = () => {
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
      <SectionHeader title={"Skills"} />
      <Flex paddingTop="4">
        <List spacing="4" width="100%">
          {skills.map((skill, index) => (
            <ListItem
              key={index}
              _hover={{ bg: listItemHoverColor }}
              padding="4"
              borderRadius="md"
              transition="background-color 0.2s"
            >
              <HStack align="start">
                <Icon as={FaCheck} color={iconColor} boxSize="5" />
                <Text fontSize="lg" fontWeight="medium">
                  <Box as="b">{skill.category}:</Box> {skill.items}
                </Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

export default SkillsAndQualifications;
