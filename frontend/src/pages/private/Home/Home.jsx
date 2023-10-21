import {
  Box,
  Divider,
  Image,
  SimpleGrid,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useDisclosure,
} from "@chakra-ui/react";
import Title from "../../../components/Texts/Title/Title";
import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation";

import { DateIcon, Pin } from "../../../Utils/icons";
import { useForm } from "react-hook-form";
import InputAsyncSelect from "../../../components/Inputs/InputSelect/InputAsyncSelect";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Subtitle from "../../../components/Texts/Subtitle";
import { aiportsOptions, flights } from "../../../Utils/aerline";
import { useState } from "react";
import DrawerComponent from "../../../components/Drawer";

export default function BasicStatistics() {
  const [vuelosFiltrados, setVuelosFiltrados] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataFlight, setDataFlight] = useState("");

  const onSubmit = async (data) => {
    const { origen, destino, fecha } = data;

    const dataFilter = flights.filter((flight) => {
      const { lista_vuelos } = flight;
      const {
        origen: vueloOrigen,
        destino: vueloDestino,
        fecha: vueloFecha,
      } = lista_vuelos;
      return (
        vueloOrigen === origen.value &&
        vueloDestino === destino.value &&
        vueloFecha === fecha
      );
    });
    setVuelosFiltrados(dataFilter);
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
      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        title={`Numero de vuelo: ${dataFlight.numero}`}
        dataFlight={dataFlight}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
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
      {vuelosFiltrados.length > 0 ? (
        vuelosFiltrados[0].lista_vuelos.vuelos.map((vuelos, index) => (
          <StatGroup
            key={index}
            padding={"15px"}
            border={"1px"}
            borderColor={"gray.300"}
            mt={"20px"}
            borderRadius={"10px"}
            onClick={() => {
              onOpen();
              setDataFlight({
                numero: vuelos.numero,
                origen: vuelosFiltrados[0].lista_vuelos.origen,
                destino: vuelosFiltrados[0].lista_vuelos.destino,
                fecha: vuelosFiltrados[0].lista_vuelos.fecha,
                precio: vuelos.precio,
                aereolinea: vuelosFiltrados[0].lista_vuelos.aereolinea,
                hora: vuelos.hora,
              });
            }}
            cursor={"pointer"}
            _hover={{
              bg: "gray.100",
              boxShadow: "lg",
              transform: "scale(1.006)",
              transition:
                "box-shadow 0.2s ease-in-out, background 0.2s ease-in-out, transform 0.2s ease-in-out", // Agrega la transición para todas las propiedades aquí
            }}
          >
            <Stat>
              <StatLabel>Fecha</StatLabel>
              <StatNumber>
                {vuelosFiltrados[0].lista_vuelos.fecha + " " + vuelos.hora}
              </StatNumber>
              <StatHelpText>
                {vuelosFiltrados[0].lista_vuelos.origen} -{" "}
                {vuelosFiltrados[0].lista_vuelos.destino}
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Precio</StatLabel>
              <StatNumber>Q. {vuelos.precio}</StatNumber>
              <StatHelpText>Precio en quetzales</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Numero de vuelo</StatLabel>
              <StatNumber>{vuelos.numero}</StatNumber>
              <StatHelpText>
                Aereolinea
                {" " + vuelosFiltrados[0].lista_vuelos.aereolinea}
              </StatHelpText>
            </Stat>
          </StatGroup>
        ))
      ) : (
        <Box mt={"50px"} textAlign={"center"}>
          <Subtitle content="No hay vuelos disponibles" mt={"20px"} />
          <Image
            src={"https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.svg"}
            alt="logo aereolinea"
            boxSize="50px"
            width={"full"}
            height={"300px"}
            mt={"20px"}
          />
        </Box>
      )}
    </Box>
  );
}
