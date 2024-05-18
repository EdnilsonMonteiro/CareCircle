import {
  Box,
  FormControl,
  Grid,
  HStack,
  Image,
  Link,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { DefaultLayout } from "containers/layouts/Default";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@chakra-ui/react";

interface FieldProps {
  title: string;
  description: string;
}

export default function HistoryPage() {
  const { handleSubmit, control } = useForm();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)";

  const theme = useTheme();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <VStack align="flex-start">
        <Text fontSize={"xl"} textAlign="left">
          Crie seu relato
        </Text>
        <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Título" mb={4} />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea {...field} placeholder="Descrição" mb={4} />
            )}
          />
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button type="submit">Postar</Button>
          </Box>
        </FormControl>
      </VStack>
    </DefaultLayout>
  );
}
