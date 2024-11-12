import { useColorModeValue } from "@chakra-ui/react";

export const useBgColor = () => {
  return useColorModeValue("gray.50", "gray.700");
};

export const useIconColor = () => {
  return useColorModeValue("green.500", "green.300");
};

export const useListItemHoverColor = () => {
  return useColorModeValue("gray.100", "gray.600");
};

export const useLinkHoverColor = () => {
  return useColorModeValue("gray.700", "gray.300");
};
