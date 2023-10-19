import React from "react";

import { Flex } from "@chakra-ui/react";

import SimpleButtonIcon from "../Buttons/SimpleButtonIcon";
import Button from "../Buttons/Button";
import Title from "../Texts/Title";

import { FilterBlueIcon, SearchIcon } from "../../Utils/icons";
import InputIcon from "../Inputs/InputIcon";

export const HeaderViewContent = ({
  titleView,
  textButton,
  showFilterButton = true,
  showSearchButton = true,
  showCreateButton = true,
  onOpen,
  onOpenFilers,
  onKeyPress = () => {},
  onChange = () => {},
}) => {
  return (
    <Flex
      position="sticky"
      top="0"
      bg="white"
      zIndex="1"
      justifyContent="space-between"
      alignItems={{ base: "start", sm: "center", md: "center" }}
      mb="2"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Title content={titleView} black />
      <Flex gap={2}>
        {showFilterButton && (
          <SimpleButtonIcon
            icon={FilterBlueIcon}
            secondary
            onClick={onOpenFilers}
          />
        )}
        {showSearchButton && (
          <InputIcon
            Icon={SearchIcon}
            placeholder="Buscar..."
            width="700px"
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
        )}
        {showCreateButton && (
          <Button text={textButton} secondary onClick={onOpen} />
        )}
      </Flex>
    </Flex>
  );
};
