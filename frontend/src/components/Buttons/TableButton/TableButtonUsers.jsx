import React from "react";
import TableButton from "./TableButton";
import { MenuItem, MenuList } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import {
  getUser,
  setIsUpdate,
  setUserSelected,
} from "../../../redux/features/userSlice";

const TableButtonUsers = ({ row, onClick, onOpenModalUpdate }) => {
  const dispatch = useDispatch();

  const handleOnClick = (isCancell = false) => {
    onClick();
    const values = { ...row.values, isCancell };
    dispatch(setUserSelected(values));
  };

  const handleUpdateUser = () => {
    const { id: user_id } = row.values;
    dispatch(getUser(user_id));
    dispatch(setIsUpdate(true));
    onOpenModalUpdate();
  };

  return (
    <TableButton>
      <MenuList>
        {/* <MenuItem onClick={handleViewEvent}>Ver evento</MenuItem> */}
        <MenuItem onClick={handleUpdateUser}>Editar usuario</MenuItem>
        <MenuItem onClick={() => handleOnClick(true)}>
          Eliminar usuario
        </MenuItem>
      </MenuList>
    </TableButton>
  );
};

export default TableButtonUsers;
