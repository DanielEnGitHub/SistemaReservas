import React from "react";
import CreatableSelect from "react-select/creatable";
import { customStyles } from "./customStyles";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { ErrorIcon } from "../../../Utils/icons";

const InputMultiSelect = ({
  placeholder,
  options = [],
  errors = "",
  key_name,
  label = "",
  control,
  defaultValue = [],
  isUpdate = false,
  validation = false,
}) => {
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
        render={({ field: { onChange, value, ref, name } }) => {
          // set value if is update and has default value
          const option_update_values =
            isUpdate && defaultValue
              ? defaultValue.map((item) => {
                  return { value: item, label: item };
                })
              : [];

          return (
            <CreatableSelect
              isClearable
              defaultValue={option_update_values}
              isMulti
              name="colors"
              options={options}
              onChange={(e) => {
                // return value
                onChange(e ? e.map((item) => item.value) : null);
              }}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder={placeholder}
              styles={customStyles(errors && errors[key_name])}
            />
          );
        }}
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

export default InputMultiSelect;
