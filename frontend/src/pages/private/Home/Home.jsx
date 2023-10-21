import {
  Box,
  Divider,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Title from "../../../components/Texts/Title/Title";
import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";

import { DateIcon, Pin, UsersIcon } from "../../../Utils/icons";
import { useForm } from "react-hook-form";
import InputAsyncSelect from "../../../components/Inputs/InputSelect/InputAsyncSelect";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Subtitle from "../../../components/Texts/Subtitle";
import { aiportsOptions, asientosList } from "../../../Utils/aerline";

export default function BasicStatistics() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  
  const asientos = asientosList();

  console.log(asientos);
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Title
        content="Busca vuelos"
        black
        textAlign={"center"}
        py={10}
        fontWeight={"bold"}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 5 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <InputAsyncSelect
            placeholder="Origen"
            errors={errors}
            control={control}
            key_name="origen"
            label="Lugar de origen"
            validation
            selectedOptions={aiportsOptions}
            Icon={Pin}
          />

          <InputAsyncSelect
            placeholder="Destino"
            errors={errors}
            control={control}
            key_name="destino"
            label="Lugar de destino"
            validation
            selectedOptions={aiportsOptions}
            Icon={Pin}
          />

          <InputFormValidation
            Icon={DateIcon}
            label="Fecha"
            placeholder="Fecha de salida"
            errors={errors}
            register={register}
            key_name="fecha"
            type="date"
            minLength={1}
          />

          <InputFormValidation
            Icon={UsersIcon}
            label="Pasajeros"
            placeholder="Número de pasajeros"
            errors={errors}
            register={register}
            key_name="pasajeros"
            type="number"
            minLength={1}
            min={1}
            noScroll
          />
          <Button
            secondary
            text="Buscar vuelos"
            type="submit"
            width="100%"
            mt={{ base: "0px", lg: "32px" }}
          />
        </SimpleGrid>
      </form>
      <Divider mt={"20px"} className="divider" />
      <Subtitle content="Vuelos disponibles" mt={"20px"} />
      <StatGroup
        padding={"15px"}
        border={"1px"}
        borderColor={"gray.300"}
        mt={"20px"}
        borderRadius={"10px"}
      >
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
}
