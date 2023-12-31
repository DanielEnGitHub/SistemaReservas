import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import InputFormValidation from "../../../components/Inputs/InputFormValidation/InputFormValidation.jsx";
import { PasswordIcon, PerfilIcon } from "../../../Utils/icons.js";
import Button from "../../../components/Buttons/Button/Button.jsx";
import Title from "../../../components/Texts/Title/Title.jsx";
import TextContent from "../../../components/Texts/TextContent/TextContent.jsx";
import { Link } from "react-router-dom";
import { Box, Flex, Checkbox } from "@chakra-ui/react";

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

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const [saveCredentials, setSaveCredentials] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    if (storedEmail && storedPassword) {
      setValue("email", storedEmail);
      setValue("password", storedPassword);
      setSaveCredentials(true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    const res = await loginService(data);
    setUser(res.user);
    setToken(res.token);
    createToken(res.token);

    if (saveCredentials) {
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userPassword", data.password);
    } else {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPassword");
    }
  };

  return (
    <div className="login-container">
      <Box className="form-container" mt={"20vh"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title content="¡Hola de nuevo!" black />
          <TextContent
            content="¡Bienvenido a bordo! Descubre el mundo con nosotros."
            gray
            marginBottom="12"
          />
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
          <Flex alignSelf={"flex-start"}>
            <Checkbox
              onChange={(e) => setSaveCredentials(e.target.checked)}
              isChecked={saveCredentials}
              colorScheme="teal"
            >
              Guardar credenciales
            </Checkbox>
          </Flex>
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
