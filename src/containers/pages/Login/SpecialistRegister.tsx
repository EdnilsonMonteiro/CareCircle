import {
  Box,
  FormControl,
  HStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { DefaultLayout } from "containers/layouts";
import { Controller, useForm, FieldValues } from "react-hook-form";

interface FieldProps {
  name: string;
  placeH?: string;
  type?: string;
}

const fields: FieldProps[] = [
  { name: "name", placeH: "Nome" },
  { name: "email", placeH: "Email" },
  { name: "password", placeH: "Senha", type: "password" },
  { name: "confirmPassword", placeH: "Confirmar senha", type: "password" },
  { name: "phone", placeH: "Telefone" },
  { name: "officeAddress", placeH: "Endereço do consultório" },
  { name: "professionalTitle", placeH: "Título Profissional" },
  {
    name: "professionalRegistrationNumber",
    placeH: "Número de Registro Profissional",
  },
  { name: "yearsOfExperience", placeH: "Anos de experiência" },
  { name: "officeHours", placeH: "Horários de atendimento" },
  { name: "biography", placeH: "Biografia" },
];

export default function CustomForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <DefaultLayout>
      <Text fontSize={"xl"}>Cadastrar especialista</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <FormControl key={index}>
            <HStack spacing={4} justifyContent="space-between" w="100%">
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    ref={ref}
                    type={field.type || "text"}
                    placeholder={field.placeH}
                    mb={4}
                  />
                )}
              />
            </HStack>
          </FormControl>
        ))}
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          justifyContent={"flex-end"}
        >
          <Button type="submit">Cadastrar</Button>
        </Box>
      </form>
    </DefaultLayout>
  );
}
