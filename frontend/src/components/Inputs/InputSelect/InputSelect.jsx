import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { ErrorIcon } from "../../../Utils/icons";
import { customStyles } from "./customStyles";

const InputSelect = ({
  placeholder,
  options,
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
  control,
  validation = false,
  defaultValue = true,
  defaultValueFirts = false,
  defaultOptionValue = 0,
  isSetValue = false,
  setValue = () => {},
}) => {
  const handleChangeType = (option) => {
    // setItemType(option);
    // var options = getOptions(option.value);
    // setList(options);
    // setGender(null);
  };

  return (
    <FormControl isInvalid={errors[key_name]} position="relative">
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
          <Select
            key={defaultOptionValue}
            className={"react-select"}
            classNamePrefix={"react-select"}
            placeholder={placeholder}
            options={options}
            onChange={(val) => {
              onChange(val.value);
              handleChangeType(val);
              isSetValue && setValue(val.value);
            }}
            styles={customStyles(errors && errors[key_name])}
            defaultValue={
              defaultValue
                ? options[defaultOptionValue]
                : defaultValueFirts
                ? options[0]
                : null
            }
            isDisabled={disabled}
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

export default InputSelect;
