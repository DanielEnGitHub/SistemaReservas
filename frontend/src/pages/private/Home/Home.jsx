import { Box, SimpleGrid } from "@chakra-ui/react";
import Title from "../../../components/Texts/Title/Title";
import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";

import { DateIcon, Pin, UsersIcon } from "../../../Utils/icons";
import { useForm } from "react-hook-form";
import InputAsyncSelect from "../../../components/Inputs/InputSelect/InputAsyncSelect";
import Button from "../../../components/Buttons/Button/Button.jsx";

const aiportsOptions = [
  {
    value: "Guatemala",
    label: "Guatemala City (GUA - La Aurora Intl.)",
  },
  {
    value: "El Salvador",
    label: "San Salvador (SAL - El Salvador Intl.)",
  },
  {
    value: "Mexico",
    label: "Mexico City (MEX - Benito Juarez Intl.)",
  },
  {
    value: "Spain",
    label: "Madrid (MAD - Adolfo Suarez Madrid-Barajas)",
  },
  {
    value: "France",
    label: "Paris (CDG - Charles de Gaulle Airport)",
  },
  {
    value: "Japan",
    label: "Tokyo (HND - Haneda Airport)",
  },
  {
    value: "Australia",
    label: "Sydney (SYD - Sydney Airport)",
  },
  {
    value: "Brazil",
    label: "São Paulo (GRU - Guarulhos International Airport)",
  },
  {
    value: "Canada",
    label: "Toronto (YYZ - Toronto Pearson International Airport)",
  },
  {
    value: "China",
    label: "Beijing (PEK - Beijing Capital International Airport)",
  },
];

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
    </Box>
  );
}
