import React from "react";

import { useForm } from "react-hook-form";

import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
import { PasswordIcon, PerfilIcon } from "../../../Utils/icons.js";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

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
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title content="¡Hola otra vez!" />
          <TextContent content="Bienvenido" gray marginBottom="12" />
          <InputFormValidation
            Icon={PerfilIcon}
            placeholder="Ingresa tu correo"
            errors={errors}
            register={register}
            key_name="email"
            label="Escribe tu correo"
            type="email"
            minLength={1}
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
          <Link to="/register">
            <Flex gap={"1"}>
              <TextContent content="¿No tienes cuenta? " gray small />
              <TextContent
                content="regístrate aquí."
                gray
                small
                fontWeight="bold"
              />
            </Flex>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
