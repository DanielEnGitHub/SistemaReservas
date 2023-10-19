import React from "react";

import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { Image, Textarea } from "@chakra-ui/react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

import { ErrorIcon, SuccessIcon } from "../../../Utils/icons";
import useZIndex from "../../../hooks/useZIndex";

const InputTextArea = ({
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
}) => {
  const { zIndex, onFocus, onBlur } = useZIndex();
  return (
    <FormControl isInvalid={errors[key_name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <Textarea
          autoComplete="off"
          // minHeight="48px"
          rows={5}
          resize={"none"}
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
          {...register(key_name, {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
          type={type}
          marginBottom={marginBottom}
          marginTop={marginTop}
          onFocus={onFocus}
          onBlur={onBlur}
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

export default InputTextArea;
