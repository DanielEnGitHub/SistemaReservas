import { Box, Text } from "@chakra-ui/react";
import moment from "moment";

function Ticket({ dataFlight, seat }) {
  const formatDate = (dateString) => {
    const date = moment(dateString, "YYYY-MM-DD HH:mm");
    const formattedDate = date.format("MMM D YYYY, hh:mm A");
    return formattedDate;
  };

  return (
    <Box
      minWidth="400px"
      height="200px"
      borderRadius="10px"
      overflow="hidden"
      margin="15px"
      filter="drop-shadow(0 3px 5px rgba(0, 0, 0, 0.5))"
      display="flex"
      alignItems="stretch"
      position="relative"
      textTransform="uppercase"
    >
      <Box
        width="20%"
        borderRight="2px dashed rgba(0, 0, 0, 0.13)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            transform: "rotate(-90deg)",
            whiteSpace: "nowrap",
            color: "#000",
          }}
        >
          Aerolinea {dataFlight.aereolinea}
        </div>
      </Box>
      <Box
        flexGrow="1"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          color={"skyblue"}
          style={{
            background: "#000",
            padding: "0 10px",
            fontSize: "2.15rem",
            whiteSpace: "nowrap",
          }}
        >
          {dataFlight.origen} - {dataFlight.destino}
        </Text>
        <h3 style={{ fontSize: "1rem" }}>Vuelo #{dataFlight.numero}</h3>
        <small
          style={{
            fontSize: "0.625rem",
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          {formatDate(dataFlight.fecha + " " + dataFlight.hora)}
        </small>
      </Box>
      <Box
        width="120px"
        backgroundImage="radial-gradient(circle at 100% 50%, transparent 25px, #fff 26px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            fontSize: "1.5rem",
            transform: "rotate(-90deg)",
          }}
        >
          {seat.posicion + seat.fila}
        </div>
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="50%"
        height="100%"
        zIndex="-1"
        backgroundImage="radial-gradient(circle at 0 50%, transparent 25px, skyblue 26px)"
      />
      <Box
        position="absolute"
        top="0"
        right="0"
        width="50%"
        height="100%"
        zIndex="-1"
        backgroundImage="radial-gradient(circle at 100% 50%, transparent 25px, skyblue 26px)"
      />
    </Box>
  );
}

export default Ticket;
