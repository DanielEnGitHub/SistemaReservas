import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Button from "../../Buttons/Button/Button";

// services
import { logoutService } from "../../../services/user";

// context
import { UserContext } from "../../../context/User";

// hooks
import { useTokenLocalStorage } from "../../../hooks/userTokenLocalStorage";

// react
import { useContext } from "react";

export default function HeaderComponent() {
  const { isOpen, onToggle } = useDisclosure();

  const { setUser, setToken } = useContext(UserContext);

  const { getToken, removeToken } = useTokenLocalStorage("token");

  const token = getToken();

  const handleLogout = async () => {
    const data = {
      token: token,
    };
    await logoutService(data);
    setUser(null);
    setToken(null);
    removeToken();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Sistema de Reservas
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}></Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            primary
            text="Cerrar sesión"
            type="submit"
            width="100%"
            onClick={handleLogout}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  const { setUser, setToken } = useContext(UserContext);

  const { getToken, removeToken } = useTokenLocalStorage("token");

  const token = getToken();

  const handleLogout = async () => {
    const data = {
      token: token,
    };
    await logoutService(data);
    setUser(null);
    setToken(null);
    removeToken();
  };
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Button
        primary
        text="Cerrar sesión"
        type="submit"
        width="100%"
        onClick={handleLogout}
      />
    </Stack>
  );
};
