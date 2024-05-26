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
import commentsMock from "mock/comments-mock.json";
import History from "components/history";
import Comments from "components/comments";
import CreateComments from "components/createComments";

export default function HistoryPage() {
  const router = useRouter();
  const { query } = router;
  const historyId = query.historyId as string;
  const [filteredHistory] = historyMock.filter((item) => item.id === historyId);
  const filteredComments = commentsMock.filter(
    (item) => item.historyId === historyId
  );

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
      <CreateComments userId="" userAvatar="" />
      {filteredComments.map((item, index) => (
        <Comments
          key={index}
          ownerName={item.ownerName}
          ownerAvatar={item.ownerAvatar}
          ownerCategory={item.ownerCategory}
          historyId={item.historyId}
          comment={item.comment}
          date={item.createdDate}
          id={item.id}
        />
      ))}
    </DefaultLayout>
  );
}
