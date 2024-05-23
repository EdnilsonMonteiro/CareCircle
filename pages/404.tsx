import React from "react";
import SpecialistRegisterPage from "containers/pages/Login/SpecialistRegister";
import { Box, VStack, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      h="100vh"
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <VStack>
        <Text fontSize="xl" alignItems={"center"}>
          Ops, parece que essa página não existe
        </Text>

        <Button fontSize={"xl"}>Retornar</Button>
      </VStack>
    </Box>
  );
}
