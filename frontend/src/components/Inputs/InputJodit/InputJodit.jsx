import React from "react";

import { Controller } from "react-hook-form";

import JoditEditor from "jodit-react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";

// import { ErrorIcon, SuccessIcon } from "../../../Utils/icons";
import useZIndex from "../../../hooks/useZIndex";
import { config } from "./config";

const InputJodit = ({
  placeholder,
  control,
  errors = "",
  key_name,
  validation = false,
  label = "",
}) => {
  const { zIndex, onFocus, onBlur } = useZIndex();

  if (placeholder) {
    config.placeholder = placeholder;
  }

  return (
    <FormControl isInvalid={errors[key_name]}>
      {label && <FormLabel>{label}</FormLabel>}

      <Controller
        control={control}
        name={key_name}
        rules={
          validation
            ? {
                required: "This is required",
              }
            : {}
        }
        render={({ field: { onChange, value, ref, name } }) => (
          <JoditEditor
            key_name={key_name}
            name={key_name}
            config={config}
            tabIndex={-1}
            onChange={onChange}
            value={value}
          />
        )}
      />

      {/* <InputGroup>

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
      </InputGroup> */}
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputJodit;
