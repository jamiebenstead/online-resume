import { Box, Flex, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { useBgColor } from "../utils/themeUtils";
import { aboutMeData } from "../data/aboutMeData";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
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
      <SectionHeader title={"Who am I?"} />
      <Flex paddingTop="4">
        <VStack padding="4">
          <Text>
            I’m passionate about both my professional work and my hobbies
            outside of tech. Here’s a bit about me beyond the code.
          </Text>
          <List spacing="4" paddingTop="2">
            {aboutMeData.map((hobby, idx) => (
              <ListItem key={idx} fontSize="sm">
                <Text fontSize="md" fontWeight="medium">
                  <Box as="b">{hobby.heading}:</Box> {hobby.description}
                </Text>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutMe;
