import {
  Box,
  FormControl,
  Grid,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { DefaultLayout } from "containers/layouts/Default";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";

export default function RegisterPage() {
  const { handleSubmit, control } = useForm();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)";

  const theme = useTheme();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <Grid templateColumns={columns} gap={4}>
        <VStack align="flex-start">
          <Text fontSize={"xl"} textAlign="left">
            Cadastro
          </Text>{" "}
          {/* Definindo textAlign como "left" */}
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Nome" mb={4} />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Email" mb={4} />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} type="password" placeholder="Senha" mb={4} />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirmar senha"
                  mb={4}
                />
              )}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              justifyContent={"flex-end"}
            >
              <Link color={theme.colors.info.pure} href="#">
                Sou psicólogo(a) ou médico(a)
              </Link>
              <Button type="submit">Cadastrar</Button>
            </Box>
          </FormControl>
        </VStack>
        <HStack justifyContent="center">
          <Image src="/imagem_home.png" />
        </HStack>
      </Grid>
    </DefaultLayout>
  );
}
