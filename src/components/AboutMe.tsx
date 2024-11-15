import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { aboutMeData } from "../data/aboutMeData";
import SectionHeader from "./SectionHeader";
import SectionBox from "./SectionBox";

const AboutMe = () => {
  return (
    <SectionBox>
      <SectionHeader title={"Who am I?"} />
      <Flex paddingTop="4">
        <VStack padding="4">
          <Text>
            I’m passionate about both my professional work and my hobbies
            outside of tech. Here’s a bit about me beyond the code.
          </Text>
          <UnorderedList spacing="4" paddingTop="2">
            {aboutMeData.map((hobby, idx) => (
              <ListItem key={idx} fontSize="sm">
                <Text fontSize="md" fontWeight="medium">
                  <Box as="b">{hobby.heading}:</Box> {hobby.description}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Flex>
    </SectionBox>
  );
};

export default AboutMe;
