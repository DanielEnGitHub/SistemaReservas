import React, { useEffect } from "react";

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Image } from "@chakra-ui/react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import { ErrorIcon, SuccessIcon } from "../../../Utils/icons";
import useZIndex from "../../../hooks/useZIndex";

const InputFormValidation = ({
  Icon,
  placeholder,
  disabled,
  error = false,
  success = false,
  errors = "",
  register,
  key_name,
  label = "",
  type = "text",
  marginBottom = "",
  marginTop = "",
  validation = true,
  step = "",
  noScroll = false,
  minLength = 4,
  maxLength = 255,
  min,
  max,
  onChange,
}) => {
  const { zIndex, onFocus, onBlur } = useZIndex();

  useEffect(() => {
    document.addEventListener("wheel", function (event) {
      if (
        document.activeElement.type === "number" &&
        document.activeElement.classList.contains("noscroll")
      ) {
        document.activeElement.blur();
      }
    });
  }, []);

  return (
    <FormControl isInvalid={errors[key_name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          zIndex={zIndex}
          children={
            <Image
              src={Icon}
              alt={"icon"}
              width="17px"
              marginLeft="7px"
              marginTop="6px"
            />
          }
        />
        <Input
          className={noScroll ? "noscroll" : ""}
          minHeight="48px"
          autoComplete="off"
          id={key_name}
          placeholder={placeholder}
          borderColor={
            error ? "brand.error" : success ? "brand.success" : "brand.gray"
          }
          _placeholder={{ color: "brand.gray" }}
          focusBorderColor={
            errors[key_name]
              ? "brand.error"
              : success
              ? "brand.success"
              : "secondary.500"
          }
          style={{
            boxSizing: "border-box",
          }}
          disabled={disabled}
          _hover={{
            borderColor: error
              ? "brand.error"
              : success
              ? "brand.success"
              : "brand.gray",
          }}
          _disabled={{
            backgroundColor: "brand.disabled",
            cursor: "not-allowed",
            _hover: { borderColor: "brand.gray" },
          }}
          {...register(
            key_name,
            validation
              ? {
                  required: "Este campo es requerido",
                  minLength: {
                    value: minLength,
                    message: `Debe tener al menos ${minLength} caracteres`,
                  },
                  maxLength: {
                    value: maxLength,
                    message: `No puede tener más de ${maxLength} caracteres`,
                  },

                  ...(type === "email" && {
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Ingrese un correo electrónico válido",
                    },
                  }),

                  ...(type === "number" && {
                    min: {
                      value: min,
                      message: `Debe ser mayor a ${min}`,
                    },
                    max: {
                      value: max,
                      message: `Debe ser menor a ${max}`,
                    },
                  }),
                  ...(type === "date"
                    ? {
                        validate: {
                          futureDate: (value) => {
                            const dateValue = new Date(value);
                            if (dateValue < new Date(min)) {
                              return `La fecha debe ser mayor que ${min}`;
                            } else if (dateValue > new Date(max)) {
                              return `La fecha debe ser menor que ${max}`;
                            }
                            return true;
                          },
                        },
                      }
                    : {}),
                }
              : {}
          )}
          type={type}
          marginBottom={marginBottom}
          marginTop={marginTop}
          onFocus={onFocus}
          onBlur={onBlur}
          step={step}
          {...(onChange && { onChange: onChange })}
        />
        {errors[key_name] && errors[key_name].message && (
          <InputRightElement
            zIndex={zIndex}
            children={
              <Image
                src={ErrorIcon}
                alt={"icon"}
                width="19px"
                marginRight="7px"
                marginTop="7px"
              />
            }
          />
        )}
        {success && (
          <InputRightElement
            zIndex={1}
            children={
              <Image
                src={SuccessIcon}
                alt={"icon"}
                width="19px"
                marginRight="7px"
                marginTop="7px"
              />
            }
          />
        )}
      </InputGroup>
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputFormValidation;
