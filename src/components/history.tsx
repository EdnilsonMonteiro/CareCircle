import React from "react";
import {
  Button,
  VStack,
  Text,
  HStack,
  useTheme,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface HistoryProps {
  id?: string;
  title: string;
  comments: number;
  description: string;
  likes?: number;
  ownerName: string;
  ownerAvatar: string;
}

const History: React.FC<HistoryProps> = ({
  title,
  comments,
  description,
  likes,
  ownerName,
  ownerAvatar,
}) => {
  const theme = useTheme();
  return (
    <VStack
      spacing={4}
      align="stretch"
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={5}
    >
      <HStack justifyContent={"space-between"}>
        <HStack>
          <Avatar w={6} h={6} src={ownerAvatar}></Avatar>
          <Text>{ownerName}</Text>
        </HStack>

        <HStack>
          <StarIcon color={theme.colors.warning} />
          <Text>Apoiar</Text>
          <Box as="div" w="2" h="2" bg="gray.500" borderRadius="50%" />
          <Text>{comments} comentários</Text>
        </HStack>
      </HStack>

      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Box
        width={1 / 4}
        borderBottom="3px solid"
        borderBottomColor={theme.colors.primary[500]}
      ></Box>

      <Box>
        <Text>{description}</Text>
      </Box>

      <HStack alignItems={"center"}></HStack>
    </VStack>
  );
};

export default History;
