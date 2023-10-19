import React from "react";
import { Flex, IconButton, Image, Tooltip } from "@chakra-ui/react";
import { Button as ChackraButton } from "@chakra-ui/button";
import { useToggle } from "../../../hooks/useToggle";
import { ActiveIcon } from "../../../Utils/icons";
import { Link } from "react-router-dom";
import TextContent from "../../Texts/TextContent/TextContent";

const Button = ({ icons = {}, active = false, onClick = () => {} }) => {
  const { state, toggle } = useToggle(false);
  return (
    <IconButton
      height="40px"
      width="40px"
      bg="brand.white"
      _hover={{ bg: "brand.white" }}
      _active={{ bg: "brand.white" }}
      aria-label={icons.alt}
      icon={
        icons && (
          <Image
            onMouseEnter={toggle}
            onMouseOut={toggle}
            src={state ? icons.active : active ? icons.active : icons.base}
            alt={icons.alt}
          />
        )
      }
      onClick={onClick}
    />
  );
};

const MobileButton = ({ icons = {}, active = false, onClick = () => {} }) => {
  return (
    <ChackraButton
      width="270px"
      justifyContent="flex-start"
      bg="transparent"
      _active={{ background: "transparent" }}
      _focus={{ background: "transparent" }}
      _hover={{ background: "transparent" }}
      gap={4}
      p="0"
      onClick={onClick}
    >
      <Image src={active ? icons.active : icons.base} alt={icons.alt} />
      <TextContent content={icons.alt} gray={!active} />
    </ChackraButton>
  );
};

const SideButton = ({
  icons = {},
  active = false,
  onClick = () => {},
  buttonLink = false,
  to = "/",
  onMobile = false,
  tooltip = false,
}) => {
  return (
    <Flex alignItems="center" flexDirection="column" position="relative">
      <Tooltip
        label={tooltip ? icons.alt : ""}
        placement={tooltip ? "right" : ""}
      >
        {buttonLink ? (
          <Link to={to}>
            {!onMobile ? (
              <Button icons={icons} active={active} onClick={onClick} />
            ) : (
              <MobileButton icons={icons} active={active} onClick={onClick} />
            )}
          </Link>
        ) : !onMobile ? (
          <Button icons={icons} active={active} onClick={onClick} />
        ) : (
          <MobileButton icons={icons} active={active} onClick={onClick} />
        )}
      </Tooltip>

      {active && !onMobile && (
        <Image
          src={ActiveIcon}
          alt="active"
          width="6px"
          position="absolute"
          bottom="-5px"
        />
      )}
    </Flex>
  );
};

export default SideButton;
