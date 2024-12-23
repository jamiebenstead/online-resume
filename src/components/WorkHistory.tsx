import React from "react";
import {
  Box,
  Flex,
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
import SectionHeader from "./SectionHeader";
import { useListItemHoverColor } from "../utils/themeUtils";
import SectionBox from "./SectionBox";

interface JobProps {
  job: Job;
}

const JobEntry = ({ job }: JobProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const listItemHoverColor = useListItemHoverColor();

  return (
    <Box
      padding="4"
      borderWidth="1px"
      borderRadius="md"
      _hover={
        job.responsibilities.length > 0 ? { bg: listItemHoverColor } : undefined
      }
      transition="background-color 0.2s"
      onClick={job.responsibilities.length > 0 ? onToggle : undefined}
      cursor={job.responsibilities.length > 0 ? "pointer" : "default"}
    >
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
        {job.responsibilities.length > 0 && (
          <IconButton
            icon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
            variant="outline"
            aria-label={isOpen ? "Collapse" : "Expand"}
          />
        )}
      </HStack>
      <Collapse in={isOpen}>
        <List spacing="2" paddingTop="2">
          {job.responsibilities.map((item, idx) => (
            <ListItem key={idx} fontSize="sm">
              <Text fontWeight="bold">
                {item.heading}:{" "}
                <Text as="span" fontWeight="medium">
                  {item.description}
                </Text>
              </Text>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

const WorkHistory = () => {
  return (
    <SectionBox>
      <SectionHeader title={"Work History"} />
      <Flex direction="column" gap="4" paddingTop="4">
        {workHistoryData.map((job, index) => (
          <JobEntry key={index} job={job} />
        ))}
      </Flex>
    </SectionBox>
  );
};

export default WorkHistory;
