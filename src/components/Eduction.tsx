import React from "react";
import {
  Box,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  Collapse,
  IconButton,
  useDisclosure,
  UnorderedList,
} from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import {
  FaUserGraduate,
  FaAward,
  FaUniversity,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { universityModuleData } from "../data/universityModulesData";
import { useListItemHoverColor } from "../utils/themeUtils";
import SectionBox from "./SectionBox";

const Eduction = () => {
  const listItemHoverColor = useListItemHoverColor();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <SectionBox>
      <SectionHeader title={"Education and Awards"} />
      <Flex paddingTop="4">
        <List spacing="4" width="100%">
          <ListItem padding="4" borderRadius="md">
            <HStack spacing="2">
              <Icon as={FaUserGraduate} boxSize="5" />
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Bachelor of Engineering, First Class Honours
                </Text>
                <Text fontSize="md">Anglia Ruskin University</Text>
                <Text fontSize="sm">September 2015 - May 2018</Text>
              </Box>
            </HStack>
          </ListItem>
          <ListItem padding="4" borderRadius="md">
            <HStack spacing="2">
              <Icon as={FaAward} boxSize="5" />
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Sam Batesom Memorial Award
                </Text>
                <Text fontSize="md">
                  Awarded for achieving the highest average grade in my academic
                  year
                </Text>
              </Box>
            </HStack>
          </ListItem>
          <ListItem
            padding="4"
            borderRadius="md"
            _hover={{ bg: listItemHoverColor }}
            transition="background-color 0.2s"
            onClick={onToggle}
            cursor="pointer"
          >
            <HStack justify="space-between" spacing="4">
              <HStack spacing="2">
                <Icon as={FaUniversity} boxSize="5" />
                <Box>
                  <Text fontSize="lg" fontWeight="bold">
                    University Modules
                  </Text>
                </Box>
              </HStack>
              <IconButton
                icon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
                variant="outline"
                aria-label={isOpen ? "Collapse" : "Expand"}
              />
            </HStack>
            <Collapse in={isOpen} animateOpacity>
              <Box>
                <UnorderedList spacing="2" paddingTop="2">
                  {universityModuleData.map((module, index) => (
                    <ListItem key={index}>
                      <Text fontSize="sm" fontWeight="medium">
                        {module.name}:{" "}
                        <Text as="span" fontWeight="bold">
                          {module.result}
                        </Text>
                      </Text>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Collapse>
          </ListItem>
        </List>
      </Flex>
    </SectionBox>
  );
};

export default Eduction;
