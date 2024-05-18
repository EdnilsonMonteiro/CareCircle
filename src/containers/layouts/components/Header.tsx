import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  useColorMode,
  useTheme,
  Image,
  VStack,
  Link,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <VStack alignItems="stretch">
      <HStack
        justifyContent="space-between"
        padding="2"
        boxShadow={`0px 2px 6px ${theme.colors.primary[500]}`}
        width="100%"
        alignItems="center"
        alignContent="center"
      >
        <VStack>
          <Box position="relative" width={20}>
            <Image src="/logo.svg" alt="Logo" width={10} height={10} />
            <Text
              position="absolute"
              top={8}
              width="100%"
              textAlign="center"
              fontSize="3xs"
              fontWeight="semibold"
              left="30%"
              transform="translateX(-50%)"
            >
              Conectar
            </Text>
          </Box>
        </VStack>
        {!isMobile && <MenuLinks layout={isMobile ? "vstack" : "hstack"} />}
        <HStack alignItems="center">
          <IconButton
            mr={2}
            width={10}
            aria-label="Alternar modo de cores"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
          <Avatar name="User 1"></Avatar>
          {isMobile && (
            <IconButton
              aria-label="Abrir menu"
              icon={<HamburgerIcon width={10} />}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </HStack>
      </HStack>

      <Drawer
        placement="right"
        onClose={() => setIsMenuOpen(false)}
        isOpen={isMenuOpen}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <MenuLinks layout={isMobile ? "vstack" : "hstack"} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </VStack>
  );
}

interface MenuLinksProps {
  layout: "vstack" | "hstack";
}

function MenuLinks({ layout }: MenuLinksProps) {
  const isVStack = layout === "vstack";

  return (
    <>
      {isVStack ? (
        <VStack alignItems="stretch">
          <Link href="#" cursor="pointer">
            Agendamento
          </Link>
          <Link href="#" cursor="pointer">
            Dicas
          </Link>
          <Link href="#" cursor="pointer">
            Relatos
          </Link>
          <Link href="#" cursor="pointer">
            Sobre
          </Link>
        </VStack>
      ) : (
        <HStack spacing={12} alignItems="center">
          <Link href="#" cursor="pointer">
            Agendamento
          </Link>
          <Link href="#" cursor="pointer">
            Dicas
          </Link>
          <Link href="#" cursor="pointer">
            Relatos
          </Link>
          <Link href="#" cursor="pointer">
            Sobre
          </Link>
        </HStack>
      )}
    </>
  );
}
