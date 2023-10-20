import React from "react";

import { useForm } from "react-hook-form";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
import { PasswordIcon, PerfilIcon } from "../../../Utils/icons.js";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

// services
import { registerService } from "../../../services/user";

// context
import { UserContext } from "../../../context/User";

// hooks
import { useTokenLocalStorage } from "../../../hooks/userTokenLocalStorage.js";

// react
import { useContext } from "react";

const RegisterScreen = () => {
  const { setUser, setToken } = useContext(UserContext);

  const { createToken } = useTokenLocalStorage("token");

  const loading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await registerService(data);
    setUser(res.user);
    setToken(res.token);
    createToken(res.token);
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
            placeholder="Nombre de usuario"
            errors={errors}
            register={register}
            key_name="username"
            label="Ingresa tu nombre de usuario"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Como te llamas?"
            errors={errors}
            register={register}
            key_name="first_name"
            label="Ingresa tu nombre"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es tu apellido?"
            errors={errors}
            register={register}
            key_name="last_name"
            label="Ingresa tu apellido"
            type="text"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es la fecha de tu cumpleaños?"
            errors={errors}
            register={register}
            key_name="date_of_birth"
            label="Ingresa tu fecha de cumpleaños"
            type="date"
            minLength={5}
          />

          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="¿Cual es tu nacionalidad?"
            errors={errors}
            register={register}
            key_name="nationality"
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
            key_name="passport_number"
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
            secondary
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
