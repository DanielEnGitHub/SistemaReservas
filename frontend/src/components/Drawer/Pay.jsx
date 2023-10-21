import React from "react";
import InputFormValidation from "../Inputs/InputFormValidation/InputFormValidation";
import { PerfilIcon } from "../../Utils/icons";
import Title from "../Texts/Title/Title";
import TextContent from "../Texts/TextContent/TextContent";

const Pay = ({ register, errors, price }) => {
  return (
    <>
      <Title content="Formulario de pago" black mb="15px" />
      <InputFormValidation
        Icon={PerfilIcon}
        label="Escriba el numero de su tarjeta"
        placeholder="Ingresa el numero de su tarjeta"
        errors={errors}
        register={register}
        key_name="tarjeta"
        type="number"
        minLength={13}
        maxLength={18}
      />

      <InputFormValidation
        Icon={PerfilIcon}
        label="Escriba el nombre del titular de la tarjeta"
        placeholder="Ingresa el nombre del titular de la tarjeta"
        errors={errors}
        register={register}
        key_name="nombre"
        type="text"
        minLength={3}
      />

      <InputFormValidation
        Icon={PerfilIcon}
        label="Escriba la fecha de vencimiento de la tarjeta"
        placeholder="mes/año"
        errors={errors}
        register={register}
        key_name="fecha_venc"
        type="text"
        minLength={5}
        maxLength={7}
      />

      <InputFormValidation
        Icon={PerfilIcon}
        label="Escriba el cvv de la tarjeta"
        placeholder="Ingresa el cvv de la tarjeta"
        errors={errors}
        register={register}
        key_name="codigo"
        type="number"
        minLength={3}
        maxLength={3}
      />

      <TextContent
        content={`El precio total a pagar es de Q.${price}`}
        gray
        marginBottom="12"
      />
    </>
  );
};

export default Pay;
