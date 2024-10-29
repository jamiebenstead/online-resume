import React from "react";
import {
  useColorModeValue,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  HStack,
  Icon,
  Text,
  Collapse,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { workHistoryData, Job } from "../data/workHistoryData";

interface JobProps {
  job: Job;
}

const JobEntry = ({ job }: JobProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box padding="4" borderWidth="1px" borderRadius="md">
      <HStack justify="space-between" spacing="4">
        <HStack spacing="2">
          <Icon as={FaBriefcase} />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {job.title} - {job.company}
            </Text>
            <Text fontSize="sm">{job.dates}</Text>
          </Box>
        </HStack>
        <IconButton
          icon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
          onClick={onToggle}
          variant="outline"
          aria-label={isOpen ? "Collapse" : "Expand"}
        />
      </HStack>
      <Collapse in={isOpen}>
        <List spacing="2" paddingTop="2">
          {job.responsibilities.map((item, idx) => (
            <ListItem key={idx} fontSize="sm">
              <Box as="b">{item.heading}:</Box> {item.description}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

const WorkHistory = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      as="section"
      padding="8"
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      maxW="container.lg"
    >
      <Flex paddingBottom="4">
        <Heading as="h2" fontSize="3xl" fontWeight="bold">
          Work History
        </Heading>
      </Flex>
      <Flex direction="column" gap="4" paddingTop="4">
        {workHistoryData.map((job, index) => (
          <JobEntry key={index} job={job} />
        ))}
      </Flex>
    </Box>
  );
};

export default WorkHistory;
