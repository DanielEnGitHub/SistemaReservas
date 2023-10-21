import React, { useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { ErrorIcon } from "../../../Utils/icons";

const InputAsyncSelect = ({
  placeholder,
  disabled,
  errors = "",
  key_name,
  label = "",
  control,
  validation = false,
  selectedOptions,
  Icon,
}) => {
  const [zIndex, setZIndex] = useState(1);
  const [text, setText] = useState("");

  return (
    <FormControl isInvalid={errors[key_name]} position="relative">
      {label && <FormLabel>{label}</FormLabel>}

      <Image
        src={Icon}
        alt={"icon"}
        width="17px"
        marginLeft="7px"
        marginTop="6px"
        position={"absolute"}
        top={10}
        left={1}
        zIndex={zIndex}
      />

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
          <Select
            options={selectedOptions}
            placeholder={placeholder}
            onInputChange={(inputValue, { action }) => {
              console.log(action);
              if (action === "input-change") {
                setZIndex(0);
              } else if (inputValue == "" && !text) {
                setZIndex(1);
              }
            }}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setZIndex(0);
                setText(true);
                const { value, label } = selectedOption;
                onChange({ value, label });
              } else {
                setZIndex(1);
                onChange(null);
              }
            }}
            styles={Object.assign(customStyles(errors && errors[key_name]), {
              placeholder: (provided) => ({
                ...provided,
                marginLeft: "30px",
              }),
            })}
            isDisabled={disabled}
            getOptionLabel={(option) => {
              return `${option.label} ${option.value}`; // Asegúrate de que las claves correspondan a las claves reales de las opciones
            }}
            getOptionValue={(option) => option.value} // Asegúrate de que esta clave corresponda a la clave real del valor de la opción
            value={value}
          />
        )}
      />
      {errors[key_name] && errors[key_name].message && (
        <Image
          src={ErrorIcon}
          alt={"icon"}
          width="19px"
          marginRight="7px"
          marginTop="7px"
          position={"absolute"}
          top={10}
          right={1}
        />
      )}
      <FormErrorMessage>
        {errors[key_name] && errors[key_name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputAsyncSelect;
