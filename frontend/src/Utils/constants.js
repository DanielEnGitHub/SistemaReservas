export const PROCESO = "1";
export const EN_RUTA = "2";
export const FINALIZADO = "3";
export const CANCELADO = "4";

export const ADMINISTRADOR = "1";
export const TRANSPORTISTA = "2";
export const VENDEDOR = "3";

export const GENERADO = "1";
export const ENVIADO = "2";
export const ENTREGADO = "3";

export const SI_APILCA = "1";
export const NO_APILCA = "2";

export const role_name = {
  [ADMINISTRADOR]: "Administrador",
  [TRANSPORTISTA]: "Transportista",
  [VENDEDOR]: "Vendedor",
};

export const event_states = [
  { value: "1", label: "Proceso" },
  { value: "2", label: "En ruta" },
  { value: "3", label: "Finalizado" },
];

export const event_pay = [
  { value: SI_APILCA, label: "Si Aplica" },
  { value: NO_APILCA, label: "No Aplica" },
];

export const event_state = [
  { value: PROCESO, label: "Proceso" },
  { value: EN_RUTA, label: "En ruta" },
  { value: FINALIZADO, label: "Finalizado" },
  { value: CANCELADO, label: "Cancelado" },
];

export const discount_state = [
  { value: 0, label: "Inactivo" },
  { value: 1, label: "Activo" },
];

export const order_state = [
  { value: GENERADO, label: "Generado" },
  { value: ENVIADO, label: "Enviado" },
  { value: ENTREGADO, label: "Entregado" },
  { value: CANCELADO, label: "Cancelado" },
];

export const document_info = {
  created_at: new Date(),
  updated_at: new Date(),
  active: true,
};

export const user_role = [
  { value: "1", label: "Administrador" },
  { value: "2", label: "Transportista" },
  { value: "3", label: "Vendedor" },
];

export const show_in_ecomerce = [
  { value: true, label: "Si mostrar" },
  { value: false, label: "No mostrar" },
];
