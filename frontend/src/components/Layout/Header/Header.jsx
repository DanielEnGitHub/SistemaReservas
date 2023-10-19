import {
  Flex,
  GridItem,
  Image,
  IconButton,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLogOut } from "../../../hooks/useLogOut";
import { useTypeDevice } from "../../../hooks/useTypeDevice";
import { toggleSidebar } from "../../../redux/features/sidebarSlice";
import { role_name } from "../../../Utils/constants";
import { PerfilDefault, MenuIcon, DropdownIcon } from "../../../Utils/icons";
import TextContent from "../../Texts/TextContent/TextContent";

const Header = ({ showSidebarButton = true, area = "" }) => {
  const dispatch = useDispatch();
  const onShowSidebar = () => dispatch(toggleSidebar());
  const { isMobile } = useTypeDevice();

  const { user, logOut } = useLogOut();

  return (
    <GridItem area={area} as="header" pt="5">
      <Flex justify="space-between" align="center" height="100%" gap={5}>
        {showSidebarButton && (
          <IconButton
            icon={<Image src={MenuIcon} width="30px" />}
            onClick={onShowSidebar}
            bg="transparent"
            ml={4}
          />
        )}
        <div style={{ width: "100%" }} />

        {!isMobile && (
          <Flex direction="column" align="end" ml={{ base: "0", xl: "20" }}>
            <TextContent content={role_name[user?.role]} gray small />
            <TextContent content={user?.user_name} fontWeight="semibold" />
          </Flex>
        )}

        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<Image src={DropdownIcon} width="15px" />}
            // bg="transparent"
            height="50px"
            minWidth="80px"
            p="0"
            mr={{ base: "5", xl: "0" }}
            bg="brand.white"
            _hover={{ bg: "brand.white" }}
            _active={{ bg: "brand.white" }}
          >
            <Image src={PerfilDefault} minWidth="50px" />
          </MenuButton>
          <MenuList zIndex={100}>
            {isMobile && (
              <MenuItem>{`${role_name[user?.role]} - ${
                user?.user_name
              }`}</MenuItem>
            )}
            <MenuItem onClick={logOut}>Cerrar sesion</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </GridItem>
  );
};

export default Header;
