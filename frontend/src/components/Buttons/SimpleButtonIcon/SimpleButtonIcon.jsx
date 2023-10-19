import React from "react";
import { Button as ButtonChakra } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";

const SimpleButtonIcon = ({
  primary = false,
  secondary = false,
  outline = false,
  icon = false,
  alt = "icon",
  disabled = false,
  type = "button",
  width = "48px",
  height = "48px",
  isLoading = false,
  onClick = () => {},
}) => {
  // Custom button

  const hover_style = {
    bg: "primary.100",
  };
  if (secondary) {
    hover_style.bg = "secondary.100";
  }

  if (outline) {
    hover_style.bg = "secondary.500";
    hover_style.color = "white";
  }
  return (
    <ButtonChakra
      minHeight={height}
      maxWidth={width}
      transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
      border={outline && "2px"}
      borderRadius="6px"
      bg={
        primary
          ? "primary.50"
          : secondary
          ? "secondary.50"
          : outline
          ? "transparent"
          : ""
      }
      borderColor="secondary.500"
      leftIcon={icon && <Image src={icon} alt={alt} ml="2" />}
      _hover={hover_style}
      _active={{
        bg: primary
          ? "primary.300"
          : secondary
          ? "secondary.300"
          : outline
          ? "secondary.300"
          : "",
        transform: "scale(0.98)",
        borderColor: "secondary.300",
      }}
      disabled={disabled || isLoading}
      type={type}
      isLoading={isLoading}
      loadingText="Verificando..."
      onClick={onClick}
    ></ButtonChakra>
  );
};

export default SimpleButtonIcon;
