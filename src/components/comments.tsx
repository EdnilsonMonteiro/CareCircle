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
interface CommentsProps {
  id?: string;
  historyId: string;
  comment: string;
  date: string;
  ownerCategory: string;
  ownerName: string;
  likes?: number;
  ownerAvatar: string;
}

const Comments: React.FC<CommentsProps> = ({
  ownerName,
  comment,
  date,
  ownerCategory,
  likes,
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
      <HStack>
        <Avatar w={6} h={6} src={ownerAvatar}></Avatar>
        <Text>{ownerName}</Text>
      </HStack>

      <Text fontSize="sm">{comment}</Text>

      <HStack alignItems={"center"}>
        <StarIcon color={theme.colors.warning} />
        <Text>Apoiar</Text>
        <Box as="div" w="2" h="2" bg="gray.500" borderRadius="50%" />
        <Text>{ownerCategory}</Text>
      </HStack>
    </VStack>
  );
};

export default Comments;
