import { Container, Stack, Text, VStack } from "@chakra-ui/layout";
import React from "react";

import Button from "../components/Buttons/Button";

import {
  ShoppingCartIcon,
  ShoppingCartIconP,
  ShoppingCartIconW,
  PerfilIcon,
} from "../Utils/icons.js";

import InputNormal from "../components/Inputs/InputNormal";
import InputIcon from "../components/Inputs/InputIcon";

import { Input } from "@chakra-ui/input";

const Components = () => {
  return (
    <div>
      <VStack>
        <Container maxW="container.xl" centerContent>
          <Text fontSize="4xl" color={"brand.black"} fontWeight={"bold"} mb={5}>
            Components
          </Text>
          <Stack
            spacing={4}
            mb={3}
            alignItems={"start"}
            width={{ base: "100%", md: "auto" }}
          >
            <Text fontSize="2xl" color={"brand.black"} fontWeight={"semibold"}>
              Botones
            </Text>
            <Stack
              spacing={4}
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
              width={{ base: "100%", md: "auto" }}
            >
              <Text
                fontSize="lg"
                fontWeight={"normal"}
                color={"brand.gray"}
                mb={2}
                width={"180px"}
              >
                Botones
              </Text>
              <Button text="Primary" primary />
              <Button text="Secondary" secondary />
              <Button text="Outline" outline />
            </Stack>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            width={{ base: "100%", md: "auto" }}
            mb={20}
          >
            <Text
              fontSize="lg"
              fontWeight={"normal"}
              color={"brand.gray"}
              mb={2}
              width={"180px"}
            >
              Botones con iconos
            </Text>
            <Button text="Primary" primary icon={ShoppingCartIcon} />
            <Button
              text="Secondary"
              secondary
              icon={ShoppingCartIconW}
              disabled
            />
            <Button text="Primary" outline icon={ShoppingCartIconP} />
          </Stack>

          <Stack
            spacing={4}
            mb={3}
            alignItems={"start"}
            width={{ base: "100%", md: "auto" }}
          >
            <Text fontSize="2xl" color={"brand.black"} fontWeight={"semibold"}>
              Inputs
            </Text>
            <Stack
              spacing={4}
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
              width={{ base: "100%", md: "auto" }}
            >
              <Text
                fontSize="lg"
                fontWeight={"normal"}
                color={"brand.gray"}
                mb={2}
                width={"180px"}
              >
                Inputs
              </Text>
              <InputNormal placeholder="Input normal" disabled={false} />

              <InputIcon Icon={PerfilIcon} placeholder="Input con icono" />
              <InputIcon
                Icon={PerfilIcon}
                placeholder="Input con icono"
                disabled={true}
              />
            </Stack>
          </Stack>
          <Stack
            spacing={4}
            mb={3}
            alignItems={"start"}
            width={{ base: "100%", md: "auto" }}
          >
            <Stack
              spacing={4}
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
              width={{ base: "100%", md: "auto" }}
            >
              <Text
                fontSize="lg"
                fontWeight={"normal"}
                color={"brand.gray"}
                mb={2}
                width={"180px"}
              >
                Inputs
              </Text>
              <InputIcon
                Icon={PerfilIcon}
                placeholder="Input con icono"
                error={true}
              />
              <InputIcon
                Icon={PerfilIcon}
                placeholder="Input con icono"
                success={true}
              />
            </Stack>
          </Stack>

          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
            width={{ base: "100%", md: "auto" }}
          >
            <Text
              fontSize="lg"
              fontWeight={"normal"}
              color={"brand.gray"}
              mb={2}
              width={"180px"}
            >
              Selects
            </Text>
            {/* <InputSelect /> */}
            {/* <InputMultiSelect />

            <InputAsyncSelect /> */}

            <Input
              placeholder="Select Date and Time"
              size="md"
              backgroundColor="#ffffff"
              type="datetime-local"
            />
          </Stack>
        </Container>
      </VStack>
    </div>
  );
};

export default Components;
