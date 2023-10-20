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
import { loginService } from "../../../services/user";

// context
import { UserContext } from "../../../context/User";

// hooks
import { useTokenLocalStorage } from "../../../hooks/userTokenLocalStorage.js";

// react
import { useContext } from "react";

const LoginScreen = () => {
  const { setUser, setToken } = useContext(UserContext);

  const { createToken } = useTokenLocalStorage("token");

  const loading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await loginService(data);
    setUser(res.user);
    setToken(res.token)
    createToken(res.token);
  };

  return (
    <div className="login-container">
      <Box className="form-container" mt={"20vh"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title content="¡Hola de nuevo!" />
          <TextContent content="¡Bienvenido a bordo! Descubre el mundo con nosotros." gray marginBottom="12" />
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
            secondary
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
      </Box>
    </div>
  );
};

export default LoginScreen;
