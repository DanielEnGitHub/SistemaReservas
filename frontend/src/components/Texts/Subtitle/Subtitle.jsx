import React from "react";
import { Text } from "@chakra-ui/react";

const Subtitle = ({ content, secondary = false, ...props }) => {
  return (
    <Text
      fontSize="2xl"
      color={secondary ? "secondary.500" : "brand.black"}
      fontWeight="semibold"
      as="h2"
      {...props}
    >
      {content}
    </Text>
  );
};

export default Subtitle;
