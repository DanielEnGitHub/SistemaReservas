import React from "react";
import { Input } from "@chakra-ui/input";

const InputNormal = ({ placeholder, disabled }) => {
  return (
    <Input
      minHeight="48px"
      autoComplete="off"
      placeholder={placeholder}
      borderColor="brand.gray"
      _placeholder={{ color: "brand.gray" }}
      focusBorderColor="secondary.500"
      style={{
        boxSizing: "border-box",
      }}
      _hover={{ borderColor: "brand.gray" }}
      _disabled={{
        backgroundColor: "brand.disabled",
        cursor: "not-allowed",
        _hover: { borderColor: "brand.gray" },
      }}
      disabled={disabled}
    />
  );
};

export default InputNormal;
