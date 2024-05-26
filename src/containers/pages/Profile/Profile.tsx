import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { DefaultLayout } from "containers/layouts";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import userMock from "mock/user-mock.json";
import historyMock from "mock/history-mock.json";
import HistoryCard from "components/historyCard";

interface CustomTextProps {
  children: ReactNode;
}

interface ProfileProps {
  userId: string;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const router = useRouter();
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const [filteredUser] = userMock.filter((item) => item.userId === userId);

  const filteredHistory = historyMock.filter((item) => item.ownerId === userId);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const columns = isMobile ? "repeat(1, 1fr)" : "30% 70%";

  const handleHistoryClick = (id: string) => {
    router.push(`/History/${id}`);
  };

  const CustomText: React.FC<CustomTextProps> = ({ children }) => {
    const bgColor = useColorModeValue(theme.colors.secondary[100], "white");
    const textColor = useColorModeValue("black", theme.colors.secondary[950]);
    const borderRadius = 10;

    return (
      <Box
        bg={bgColor}
        color={textColor}
        borderRadius={borderRadius}
        p={2}
        m={1}
      >
        {children}
      </Box>
    );
  };

  return (
    <DefaultLayout>
      <Grid templateColumns={columns} gap={4}>
        <VStack
          borderRadius={10}
          p={3}
          bg={useColorModeValue(
            theme.colors.secondary[300],
            theme.colors.neutral[600]
          )}
        >
          <Text fontSize={"md"}>Perfil</Text>
          <Avatar w={15} h={15} />
          {filteredUser && <Text fontSize={"sm"}>{filteredUser.userName}</Text>}

          {filteredUser && (
            <>
              {filteredUser.extraInfo && (
                <Flex flexDirection={"column"} textAlign={"left"}>
                  <Text>Especialidade:</Text>
                  <CustomText>
                    {filteredUser.extraInfo.tituloProfissional}
                  </CustomText>

                  <Text>Serviços oferecidos:</Text>
                  <CustomText>
                    {filteredUser.extraInfo.servicosOferecidos + " "}
                  </CustomText>

                  <Text>Endereço:</Text>
                  <CustomText>
                    {filteredUser.extraInfo.enderecoConsultorio}
                  </CustomText>

                  <Text>Horários de Atendimento:</Text>
                  <CustomText>
                    {filteredUser.extraInfo.horariosAtendimento}
                  </CustomText>

                  <Text>Biografia:</Text>
                  <CustomText>{filteredUser.extraInfo.biografia}</CustomText>
                </Flex>
              )}
            </>
          )}
        </VStack>

        <VStack>
          {filteredUser && filteredUser.userCategory === "pais" ? (
            <Text fontSize={"md"}>Relatos</Text>
          ) : (
            <Text fontSize={"md"}>Dicas</Text>
          )}

          <Box>
            {filteredHistory.map((item, index) => (
              <Box
                _hover={{ cursor: "pointer" }}
                onClick={() => handleHistoryClick(item.id)}
              >
                <HistoryCard
                  id={item.id}
                  likes={20}
                  title={item.title}
                  ownerAvatar={item.ownerAvatar}
                  ownerName={item.ownerName}
                  comments={item.comments}
                />
              </Box>
            ))}
          </Box>
        </VStack>
      </Grid>
    </DefaultLayout>
  );
};

export default Profile;
