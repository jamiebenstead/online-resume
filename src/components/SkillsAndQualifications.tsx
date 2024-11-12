import React from "react";
import {
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { skills } from "../data/skillsData";
import SectionHeader from "./SectionHeader";
import { useBgColor, useIconColor } from "../utils/themeUtils";

const SkillsAndQualifications = () => {
  const iconColor = useIconColor();
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
      <SectionHeader title={"Skills"} />
      <Flex paddingTop="4">
        <List spacing="4" width="100%">
          {skills.map((skill, index) => (
            <ListItem key={index} padding="4" borderRadius="md">
              <HStack spacing="2">
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
