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
} from "@chakra-ui/react";

import knowMoreMock from "mock/knowMore-mock.json";

export default function KnowMore() {
  const router = useRouter();

  const handleCadastroClick = () => {
    router.push("/registerPage");
  };

  const handleSaibaMaisClick = () => {
    router.push("/saiba-mais");
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)";

  return (
    <DefaultLayout>
      {knowMoreMock.map((item, index) => (
        <Grid mb={5} templateColumns={columns} gap={4}>
          <TextBase title={item.title} description={item.description} />
          <HStack justifyContent="center">
            <Image src="/imagem_home.png" />
          </HStack>
        </Grid>
      ))}
    </DefaultLayout>
  );
}
