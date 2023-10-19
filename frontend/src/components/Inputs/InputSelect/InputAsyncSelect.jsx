import React from "react";
import AsyncSelect from "react-select/async";
import { customStyles } from "./customStyles";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { ErrorIcon } from "../../../Utils/icons";
import useAsyncOptions from "../../../hooks/useAsyncOptions";

const InputAsyncSelect = ({
  placeholder,
  disabled,
  errors = "",
  key_name,
  label = "",
  control,
  validation = false,
  labelKey = "label",
  labelKey2 = "",
  valueKey = "value",
  collection_name = "",
  search_field_name = "",
}) => {
  const { asyncOptions } = useAsyncOptions(collection_name, search_field_name);
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
          <AsyncSelect
            cacheOptions
            defaultOptions
            placeholder={placeholder}
            onChange={(e) => {
              if (e) {
                const { created_at, updated_at, ...rest } = e;
                onChange(rest);
              } else {
                onChange(null);
              }
            }}
            loadOptions={asyncOptions}
            styles={customStyles(errors && errors[key_name])}
            isDisabled={disabled}
            // getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) =>
              `${option[labelKey]} ${option[labelKey2] || ""}`
            }
            // defaultValue={{
            //   [valueKey]: "whqk2khReffPDTsHS9vs",
            //   [labelKey]: "Celco",
            // }}
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
