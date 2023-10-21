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
import Button from "../../components/Buttons/Button/Button.jsx";
import { asientosList } from "../../Utils/aerline";
import Subtitle from "../Texts/Subtitle";
import Pay from "./Pay.jsx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const DrawerComponent = ({ isOpen, onOpen, onClose, title, dataFlight }) => {
  const [contador, setContador] = useState(0);
  const [step, setStep] = useState(1);
  const asientos = asientosList;

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePreviousStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

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
      setStep(1);
    };
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast.success("Compra realizada con exito");
    onClose();
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Subtitle content={title} />
            </DrawerHeader>

            <DrawerBody>
              {step === 1 && (
                <>
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
                  <Center mt={6}>
                    <Box>
                      <span>Boletos: {contador}</span>
                    </Box>
                  </Center>
                  <Flex direction="column" align="center" py={"20px"}>
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
                </>
              )}

              {step === 2 && (
                <Center>
                  {/* Contenido del segundo paso */}
                  <Box>
                    <Pay
                      errors={errors}
                      register={register}
                      price={dataFlight.precio * contador}
                    />
                  </Box>
                </Center>
              )}
            </DrawerBody>
            <Center mb={"20px"}>
              {step === 1 && (
                <Button
                  onClick={handleNextStep}
                  secondary
                  text="Siguiente"
                  type="button"
                  isDisabled={contador === 0}
                />
              )}

              {step === 2 && (
                <>
                  <Button
                    mt={"20px"}
                    onClick={handlePreviousStep}
                    secondary
                    text="Volver"
                    type="button"
                    mr={"20px"}
                  />
                  <Button mt={"20px"} primary text="Guardar" type="submit" />
                </>
              )}
            </Center>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
