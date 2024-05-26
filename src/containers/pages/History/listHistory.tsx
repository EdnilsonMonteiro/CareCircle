import React from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "containers/layouts";
import TextBase from "components/TextBase";
import {
  Grid,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import HistoryCard from "components/historyCard";
import historyMock from "mock/history-mock.json";

export default function HistoryPage() {
  const router = useRouter();

  const { type } = router.query;

  const filteredHistory = type
    ? historyMock.filter((item) => item.type === type)
    : historyMock;

  const handleCreateHistory = () => {
    router.push("/createHistory");
  };

  const handleHistoryClick = (id: string) => {
    router.push(`/History/${id}`);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "80% 20%";

  return (
    <DefaultLayout>
      <Grid templateColumns={columns} gap={4}>
        <Box>
          {type == "relato" ? (
            <>
              <Text fontSize={"xl"}>Relatos</Text>
            </>
          ) : (
            <>
              <Text fontSize={"xl"}>Dicas</Text>
            </>
          )}
          {filteredHistory.map((item, index) => (
            <Box
              _hover={{ cursor: "pointer" }}
              onClick={() => handleHistoryClick(item.id)}
            >
              <HistoryCard
                key={item.id}
                title={item.title}
                comments={item.comments}
                ownerAvatar={item.ownerAvatar}
                ownerName={item.ownerName}
              />
            </Box>
          ))}
        </Box>

        <Box>
          {type == "relato" ? (
            <>
              <Text fontSize={"md"}>Quer criar seu relato também?</Text>
              <Button onClick={handleCreateHistory}>Criar relato</Button>
            </>
          ) : (
            <>
              <Text fontSize={"md"}>Quer criar sua dica também?</Text>
              <Button onClick={handleCreateHistory}>Criar dica</Button>
            </>
          )}
        </Box>
      </Grid>
    </DefaultLayout>
  );
}
