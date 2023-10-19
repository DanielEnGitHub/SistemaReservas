import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Image } from "@chakra-ui/react";

import { ErrorIcon, SuccessIcon } from "../../../Utils/icons";

const InputIcon = ({
  Icon,
  placeholder,
  disabled,
  error = false,
  success = false,
  onKeyPress = () => {},
  onChange = () => {},
}) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        // children="$"
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
        onKeyPress={onKeyPress}
        onChange={onChange}
        minHeight="48px"
        autoComplete="off"
        placeholder={placeholder}
        borderColor={
          error ? "brand.error" : success ? "brand.success" : "brand.gray"
        }
        _placeholder={{ color: "brand.gray" }}
        focusBorderColor={
          error ? "brand.error" : success ? "brand.success" : "secondary.500"
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
      />
      {error && (
        <InputRightElement
          children={
            <img
              src={ErrorIcon}
              alt={"icon"}
              width="17"
              style={{ marginRight: 7 }}
            />
          }
        />
      )}
      {success && (
        <InputRightElement
          children={
            <img
              src={SuccessIcon}
              alt={"icon"}
              width="17"
              style={{ marginRight: 7 }}
            />
          }
        />
      )}
    </InputGroup>
  );
};

export default InputIcon;
