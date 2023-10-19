import React from "react";
import { VStack, Flex, Image } from "@chakra-ui/react";

import {
  EventsActiveIcon,
  EventsIcon,
  HomeActiveIcon,
  HomeIcon,
  LogOutActiveIcon,
  LogoutIcon,
  OrdersActiveIcon,
  OrdersIcon,
  ProductsActiveIcon,
  ProductsIcon,
  UsersActiveIcon,
  UsersIcon,
  SubModulesIcon,
  SubModulesActiveIcon,
} from "../../../Utils/icons";

import logoApp from "../../../assets/img/img/logo-app.svg";

import { useLogOut } from "../../../hooks/useLogOut";
import SideButton from "../../Buttons/SideButton";
import { useSidebarContent } from "../../../hooks/useSidebarContent";
import {
  ADMINISTRADOR,
  TRANSPORTISTA,
  VENDEDOR,
} from "../../../Utils/constants";

export const SidebarContent = ({ onMobile = false }) => {
  const { logOut, user } = useLogOut();
  const { role } = user;

  const { activeMenu, onClose, handleClick } = useSidebarContent(role);

  return (
    <Flex
      h="100%"
      flexDirection="column"
      alignItems={!onMobile ? "center" : "flex-start"}
      justifyContent="space-between"
      py={4}
    >
      <VStack gap={6}>
        <Image src={logoApp} width="40px" my="3" />
        {role !== TRANSPORTISTA && (
          <>
            <SideButton
              icons={{
                base: ProductsIcon,
                active: ProductsActiveIcon,
                alt: "Productos",
              }}
              active={activeMenu.products}
              onClick={() => {
                onClose();
                handleClick("products");
              }}
              buttonLink
              to="/app/products"
              onMobile={onMobile}
              tooltip={!onMobile}
            />

            <SideButton
              icons={{
                base: SubModulesIcon,
                active: SubModulesActiveIcon,
                alt: "Sub modulos",
              }}
              active={activeMenu.submodules}
              onClick={() => {
                onClose();
                handleClick("submodules");
              }}
              buttonLink
              to="/app/submodules"
              onMobile={onMobile}
              tooltip={!onMobile}
            />

            <SideButton
              icons={{
                base: OrdersIcon,
                active: OrdersActiveIcon,
                alt: "Pedidos",
              }}
              active={activeMenu.orders}
              onClick={() => {
                onClose();
                handleClick("orders");
              }}
              buttonLink
              to="/app/orders"
              onMobile={onMobile}
              tooltip={!onMobile}
            />
          </>
        )}

        {role !== VENDEDOR && (
          <SideButton
            icons={{
              base: EventsIcon,
              active: EventsActiveIcon,
              alt: "Eventos",
            }}
            active={activeMenu.events}
            onClick={() => {
              onClose();
              handleClick("events");
            }}
            buttonLink
            to="/app/events"
            onMobile={onMobile}
            tooltip={!onMobile}
          />
        )}

        {role === ADMINISTRADOR && (
          <SideButton
            icons={{
              base: UsersIcon,
              active: UsersActiveIcon,
              alt: "Usuarios",
            }}
            active={activeMenu.users}
            onClick={() => {
              onClose();
              handleClick("users");
            }}
            buttonLink
            to="/app/users"
            onMobile={onMobile}
            tooltip={!onMobile}
          />
        )}
      </VStack>
      <SideButton
        icons={{
          base: LogoutIcon,
          active: LogOutActiveIcon,
          alt: "Cerrar sesion",
        }}
        onClick={logOut}
        onMobile={onMobile}
      />
    </Flex>
  );
};
