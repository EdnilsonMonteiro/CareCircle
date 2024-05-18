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

export default function Home() {
  const router = useRouter();

  const handleCadastroClick = () => {
    router.push("/cadastro"); // Substitua "/cadastro" pela rota correta para a tela de cadastro
  };

  const handleSaibaMaisClick = () => {
    router.push("/saiba-mais"); // Substitua "/saiba-mais" pela rota correta para a tela de saiba mais
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)";

  return (
    <DefaultLayout>
      <Grid templateColumns={columns} gap={4}>
        <TextBase
          title="Conectando mães com especialistas 
          para construir pontes de esperança e compreensão no mundo do autismo."
          description="Consiga apoio especializado de forma fácil, tenha acesso a
          relatos de outras mães.O (nome da marca) é um espaço 
          dedicado a oferecer apoio e orientação especializada às 
          mães que enfrentam o desafio único de criar filhos com 
          autismo. "
          primaryButtonText="Cadastre-se"
          onPrimaryButtonClick={handleCadastroClick}
          secondaryButtonText="Saiba mais"
          onSecondaryButtonClick={handleSaibaMaisClick}
        />
        <HStack justifyContent="center">
          <Image src="/imagem_home.png" />
        </HStack>
      </Grid>
    </DefaultLayout>
  );
}
