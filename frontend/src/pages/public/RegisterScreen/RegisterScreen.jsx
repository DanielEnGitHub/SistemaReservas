import React from "react";

import { useForm } from "react-hook-form";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
import { PasswordIcon, PerfilIcon } from "../../../Utils/icons.js";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const RegisterScreen = () => {
  const loading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <Box className="form-container" mt={"1vh"}>
        <Title
          sizeBase="3xl"
          smBase="3xl"
          className={"title-form-container"}
          content="Únete ahora para explorar los mejores viajes del mundo. ¡Regístrate y comienza a planificar tus próximas aventuras!"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Como te llamas?"
            errors={errors}
            register={register}
            key_name="text"
            label="Ingresa tu nombre"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es tu apellido?"
            errors={errors}
            register={register}
            key_name="text"
            label="Ingresa tu apellido"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es la fecha de tu cumpleaños?"
            errors={errors}
            register={register}
            key_name="text"
            label="Ingresa tu fecha de cumpleaños"
            type="date"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es tu nacionalidad?"
            errors={errors}
            register={register}
            key_name="text"
            label="Ingresa tu nacionalidad"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="Ingresa tu correo"
            errors={errors}
            register={register}
            key_name="email"
            label="Escribe tu correo"
            type="email"
            minLength={0}
          />

          <InputFormValidation
            Icon={PasswordIcon}
            placeholder="Ingresa el numero de documento de viaje"
            errors={errors}
            register={register}
            key_name="number"
            label="Escribe el numero de documento de viaje"
            type="text"
            minLength={6}
          />

          <InputFormValidation
            Icon={PasswordIcon}
            placeholder="Ingresa tu contraseña"
            errors={errors}
            register={register}
            key_name="password"
            label="Escribe tu contraseña"
            type="password"
            minLength={8}
          />

          <Button
            isLoading={loading}
            primary
            text="Entrar"
            type="submit"
            width="100%"
          />

          <Link to="/">
            <Flex gap={"1"}>
              <TextContent content="¿Ya tienes cuenta? " gray small />
              <TextContent
                content="inicia seision aqui."
                gray
                small
                fontWeight="bold"
              />
            </Flex>
          </Link>
        </form>
      </Box>
    </div>
  );
};

export default RegisterScreen;
