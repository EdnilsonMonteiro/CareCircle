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
import historyMock from "mock/history-mock.json";
import History from "components/history";

export default function HistoryPage() {
  const router = useRouter();
  const { query } = router;
  const historyId = query.historyId as string;
  const [filteredHistory] = historyMock.filter((item) => item.id === historyId);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <DefaultLayout>
      <Box>
        {filteredHistory ? (
          <>
            <History
              title={filteredHistory.title}
              description={filteredHistory.description}
              comments={filteredHistory.comments}
              ownerAvatar={filteredHistory.ownerAvatar}
              ownerName={filteredHistory.ownerName}
            />
          </>
        ) : (
          <Text>História não encontrada</Text>
        )}
      </Box>
    </DefaultLayout>
  );
}
