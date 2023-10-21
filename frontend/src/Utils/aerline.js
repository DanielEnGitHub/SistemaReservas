export const airports = [
  {
    codigo_iata: "SJO",
    nombre: "Aeropuerto Internacional Juan Santamaría",
    ciudad: "San José",
    pais: "Costa Rica",
  },
  {
    codigo_iata: "SAL",
    nombre: "Aeropuerto Internacional de El Salvador",
    ciudad: "San Salvador",
    pais: "El Salvador",
  },
  {
    codigo_iata: "IAH",
    nombre: "George Bush Intercontinental Airport",
    ciudad: "Houston",
    pais: "Estados Unidos",
  },
  {
    codigo_iata: "JFK",
    nombre: "John F. Kennedy International Airport",
    ciudad: "Nueva York",
    pais: "Estados Unidos",
  },
  {
    codigo_iata: "LAX",
    nombre: "Los Angeles International Airport",
    ciudad: "Los Angeles",
    pais: "Estados Unidos",
  },
  {
    codigo_iata: "MIA",
    nombre: "Miami International Airport",
    ciudad: "Miami",
    pais: "Estados Unidos",
  },
  {
    codigo_iata: "GUA",
    nombre: "Aeropuerto Internacional La Aurora",
    ciudad: "Ciudad de Guatemala",
    pais: "Guatemala",
  },
  {
    codigo_iata: "TGU",
    nombre: "Aeropuerto Internacional de Tegucigalpa",
    ciudad: "Tegucigalpa",
    pais: "Honduras",
  },
  {
    codigo_iata: "MEX",
    nombre: "Aeropuerto Internacional de la Ciudad de México",
    ciudad: "Ciudad de México",
    pais: "México",
  },
  {
    codigo_iata: "MGA",
    nombre: "Aeropuerto Internacional Augusto C. Sandino",
    ciudad: "Managua",
    pais: "Nicaragua",
  },
  {
    codigo_iata: "PTY",
    nombre: "Aeropuerto Internacional de Tocumen",
    ciudad: "Ciudad de Panamá",
    pais: "Panamá",
  },
];

export const aiportsOptions = [
  {
    value: "SJO",
    label:
      "Costa Rica San Jose (SJO - Aeropuerto Internacional Juan Santamaría)",
  },
  {
    value: "SAL",
    label:
      "El Salvador San Salvador (SAL - Aeropuerto Internacional de El Salvador)",
  },
  {
    value: "IAH",
    label:
      "Estados Unidos Houston (IAH - George Bush Intercontinental Airport)",
  },
  {
    value: "JFK",
    label:
      "Estados Unidos Nueva York (JFK - John F. Kennedy International Airport)",
  },
  {
    value: "LAX",
    label:
      "Estados Unidos Los Angeles (LAX - Los Angeles International Airport)",
  },
  {
    value: "MIA",
    label: "Estados Unidos Miami (MIA - Miami International Airport)",
  },
  {
    value: "GUA",
    label:
      "Guatemala Ciudad de Guatemala (GUA - Aeropuerto Internacional La Aurora)",
  },
  {
    value: "TGU",
    label:
      "Honduras Tegucigalpa (TGU - Aeropuerto Internacional de Tegucigalpa)",
  },
  {
    value: "MEX",
    label:
      "México Ciudad de México (MEX - Aeropuerto Internacional de la Ciudad de México)",
  },
  {
    value: "MGA",
    label:
      "Nicaragua Managua (MGA - Aeropuerto Internacional Augusto C. Sandino)",
  },
  {
    value: "PTY",
    label:
      "Panamá Ciudad de Panamá (PTY - Aeropuerto Internacional de Tocumen)",
  },
  // Agrega más elementos si es necesario
];

export const flights = [
  {
    lista_vuelos: {
      aereolinea: "AV",
      fecha: "2023-08-24",
      origen: "GUA",
      destino: "SAL",
      vuelos: [
        {
          numero: "123",
          hora: "10:00",
          precio: 600,
        },
        {
          numero: "456",
          hora: "11:00",
          precio: 700,
        },
        {
          numero: "789",
          hora: "12:00",
          precio: 800,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "IB",
      fecha: "2023-08-25",
      origen: "SAL",
      destino: "GUA",
      vuelos: [
        {
          numero: "234",
          hora: "13:00",
          precio: 650,
        },
        {
          numero: "567",
          hora: "14:00",
          precio: 750,
        },
        {
          numero: "890",
          hora: "15:00",
          precio: 850,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "AA",
      fecha: "2023-08-26",
      origen: "SJO",
      destino: "MIA",
      vuelos: [
        {
          numero: "345",
          hora: "16:00",
          precio: 500,
        },
        {
          numero: "678",
          hora: "17:00",
          precio: 600,
        },
        {
          numero: "901",
          hora: "18:00",
          precio: 700,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "UA",
      fecha: "2023-08-27",
      origen: "IAH",
      destino: "JFK",
      vuelos: [
        {
          numero: "123",
          hora: "9:00",
          precio: 550,
        },
        {
          numero: "456",
          hora: "10:00",
          precio: 650,
        },
        {
          numero: "789",
          hora: "11:00",
          precio: 750,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "DL",
      fecha: "2023-08-28",
      origen: "JFK",
      destino: "LAX",
      vuelos: [
        {
          numero: "234",
          hora: "12:00",
          precio: 450,
        },
        {
          numero: "567",
          hora: "13:00",
          precio: 550,
        },
        {
          numero: "890",
          hora: "14:00",
          precio: 650,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "AA",
      fecha: "2023-08-29",
      origen: "LAX",
      destino: "MIA",
      vuelos: [
        {
          numero: "345",
          hora: "15:00",
          precio: 600,
        },
        {
          numero: "678",
          hora: "16:00",
          precio: 700,
        },
        {
          numero: "901",
          hora: "17:00",
          precio: 800,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "AV",
      fecha: "2023-08-30",
      origen: "MIA",
      destino: "GUA",
      vuelos: [
        {
          numero: "123",
          hora: "10:00",
          precio: 550,
        },
        {
          numero: "456",
          hora: "11:00",
          precio: 650,
        },
        {
          numero: "789",
          hora: "12:00",
          precio: 750,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "IB",
      fecha: "2023-08-31",
      origen: "GUA",
      destino: "TGU",
      vuelos: [
        {
          numero: "234",
          hora: "13:00",
          precio: 500,
        },
        {
          numero: "567",
          hora: "14:00",
          precio: 600,
        },
        {
          numero: "890",
          hora: "15:00",
          precio: 700,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "AA",
      fecha: "2023-09-01",
      origen: "TGU",
      destino: "MEX",
      vuelos: [
        {
          numero: "345",
          hora: "16:00",
          precio: 700,
        },
        {
          numero: "678",
          hora: "17:00",
          precio: 800,
        },
        {
          numero: "901",
          hora: "18:00",
          precio: 900,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "UA",
      fecha: "2023-09-02",
      origen: "MEX",
      destino: "MGA",
      vuelos: [
        {
          numero: "123",
          hora: "9:00",
          precio: 600,
        },
        {
          numero: "456",
          hora: "10:00",
          precio: 700,
        },
        {
          numero: "789",
          hora: "11:00",
          precio: 800,
        },
      ],
    },
  },
  {
    lista_vuelos: {
      aereolinea: "DL",
      fecha: "2023-09-03",
      origen: "MGA",
      destino: "PTY",
      vuelos: [
        {
          numero: "234",
          hora: "12:00",
          precio: 550,
        },
        {
          numero: "567",
          hora: "13:00",
          precio: 650,
        },
        {
          numero: "890",
          hora: "14:00",
          precio: 750,
        },
      ],
    },
  },
];

export const asientosList = () => {
  const asientosData = [];

  flights.forEach((vuelo) => {
    const { lista_vuelos } = vuelo;
    const { aereolinea, fecha, origen, destino, vuelos } = lista_vuelos;

    vuelos.forEach((v) => {
      const { numero } = v;
      const avion = `Airbus ${Math.floor(Math.random() * 10) * 10}`;
      const asientos = [];

      for (let fila = 1; fila <= 20; fila++) {
        for (let letra of ["A", "B", "C"]) {
          const disponible = Math.random() < 0.7; // Genera un 70% de asientos disponibles
          asientos.push({ fila: fila.toString(), posicion: letra, disponible });
        }
      }

      asientosData.push({
        lista_asientos: {
          aereolinea,
          numero_vuelo: numero,
          fecha,
          origen,
          destino,
          avion,
          asientos,
        },
      });
    });
  });
  return asientosData;
};