import React from "react";
import {
  Button,
  VStack,
  Text,
  HStack,
  useTheme,
  Box,
  Avatar,
  Input,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface CreateCommentsProps {
  userId: string;
  userAvatar: string;
}

const CreateComments: React.FC<CreateCommentsProps> = ({
  userId,
  userAvatar,
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
        <Avatar w={10} h={10} src={userAvatar}></Avatar>
        <Input border={"none"} placeholder="Adicione um comentário" />
      </HStack>

      <Button alignSelf={"flex-end"}>Comentar</Button>
    </VStack>
  );
};

export default CreateComments;
