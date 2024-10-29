import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <>
      <Flex paddingBottom="4">
        <Heading as="h2" fontSize="3xl" fontWeight="bold">
          {title}
        </Heading>
      </Flex>
    </>
  );
};

export default SectionHeader;
