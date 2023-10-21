import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { asientosList } from "../../Utils/aerline";
import Subtitle from "../Texts/Subtitle";

const DrawerComponent = ({ isOpen, onOpen, onClose, title, dataFlight }) => {
  const [contador, setContador] = useState(0);
  const asientos = asientosList;

  const filtrarPorNumeroVuelo = (numeroVuelo, origen, destino, fecha) => {
    const resultado = asientos.filter((item) => {
      return (
        item.lista_asientos.numero_vuelo === numeroVuelo &&
        item.lista_asientos.origen === origen &&
        item.lista_asientos.destino === destino &&
        item.lista_asientos.fecha === fecha
      );
    });
    return resultado;
  };

  const { numero, origen, destino, fecha } = dataFlight;

  const resultadoFiltrado = filtrarPorNumeroVuelo(
    numero,
    origen,
    destino,
    fecha
  );

  const seats =
    resultadoFiltrado.length > 0
      ? resultadoFiltrado[0].lista_asientos.asientos
      : [];

  const compararAsientos = (a, b) => {
    const posicionA = a.posicion.charCodeAt(0);
    const posicionB = b.posicion.charCodeAt(0);

    if (posicionA < posicionB) {
      return -1;
    }
    if (posicionA > posicionB) {
      return 1;
    }
    const filaA = parseInt(a.fila);
    const filaB = parseInt(b.fila);

    return filaA - filaB;
  };

  const colorBoxStyle = {
    width: "15px",
    height: "15px",
    display: "inline-block",
    marginRight: "5px",
  };

  const sortedSeats = seats.sort(compararAsientos);

  const handleSeatClick = (index) => {
    const updatedSeats = seatsOrdenados.map((seat) => ({ ...seat }));

    if (!updatedSeats[index].disponibleEdit) {
      updatedSeats[index].disponibleEdit = true;
      setContador(contador + 1);
    } else {
      updatedSeats[index].disponibleEdit = false;
      setContador(contador - 1);
    }

    setSeatsOrdenados(updatedSeats);
  };

  const [seatsOrdenados, setSeatsOrdenados] = useState(sortedSeats);

  useEffect(() => {
    setSeatsOrdenados(sortedSeats);
    return () => {
      setContador(0);
    };
  }, [isOpen]);

  return (
    <>
      <Drawer
        placement={"bottom"}
        onClose={onClose}
        isOpen={isOpen}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Subtitle content={title} />
          </DrawerHeader>

          <DrawerBody>
            <Center>
              <Box mr={"10px"}>
                <Box style={colorBoxStyle} bg={"green.100"} />
                <span>Disponibles</span>
              </Box>

              <Box mr={"10px"}>
                <Box style={colorBoxStyle} bg={"green.500"} />
                <span>No Disponibles</span>
              </Box>

              <Box>
                <Box style={colorBoxStyle} bg={"yellow.300"} />
                <span>Seleccionados</span>
              </Box>
            </Center>
            <Flex direction="column" align="center" py={"40px"}>
              <SimpleGrid columns={10} spacing={3} mt={3}>
                {seatsOrdenados.map((seat, index) => {
                  return (
                    <Box
                      cursor={seat.disponible ? "pointer" : "not-allowed"}
                      key={index}
                      w="40px"
                      h="40px"
                      bg={
                        seat.disponibleEdit
                          ? "yellow.300"
                          : seat.disponible
                          ? "green.100"
                          : "green.500"
                      }
                      border="1px"
                      borderColor="gray.400"
                      m={1}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      onClick={
                        seat.disponibleEdit
                          ? () => handleSeatClick(index)
                          : seat.disponible
                          ? () => handleSeatClick(index)
                          : null
                      }
                    >
                      {seat.posicion + seat.fila}
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Flex>
            <Center mt={3}>
              <Box>
                <span>Boletos: {contador}</span>
              </Box>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
