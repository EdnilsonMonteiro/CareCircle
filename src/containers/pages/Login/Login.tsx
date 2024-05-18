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

export default function LoginPage() {
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
            Login
          </Text>{" "}
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {/* Altere de Box para FormControl e adicione 'as="form"' */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Digite seu email" mb={4} />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Digite sua senha"
                  mb={4}
                />
              )}
            />
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Button type="submit">Entrar</Button>
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
