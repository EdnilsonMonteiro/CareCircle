import { Box, Container, ContainerProps } from "@chakra-ui/react";
import { Header } from "./components";
import Footer from "./components/Footer";

export interface DefaultLayoutProps extends ContainerProps {}

export function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
  return (
    <Box>
      <Header />
      <Container p="0" py="10" maxW={1250} {...props}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
