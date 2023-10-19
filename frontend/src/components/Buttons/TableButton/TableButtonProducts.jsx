import React from "react";
import TableButton from "./TableButton";
import { MenuItem, MenuList } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import {
  getProduct,
  setIsUpdate,
  setProductSelected,
} from "../../../redux/features/productSlice";

const TableButtonProducts = ({
  row,
  onClick,
  onOpenModalUpdate,
  onOpenModalDiscount,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = (isCancell = false) => {
    onClick();
    const values = { ...row.values, isCancell };
    dispatch(setProductSelected(values));
  };

  const handleUpdateProduct = () => {
    const { id: product_id } = row.values;
    dispatch(getProduct(product_id));
    dispatch(setIsUpdate(true));
    onOpenModalUpdate();
  };

  const handleDiscount = () => {
    const { id: product_id } = row.values;
    dispatch(getProduct(product_id));
    onOpenModalDiscount();
  };

  return (
    <TableButton>
      <MenuList>
        {/* <MenuItem onClick={handleViewEvent}>Ver evento</MenuItem> */}
        <MenuItem onClick={handleUpdateProduct}>Editar producto</MenuItem>
        <MenuItem onClick={() => handleOnClick(true)}>
          Eliminar producto
        </MenuItem>
        <MenuItem onClick={handleDiscount}>Agregar Descuento</MenuItem>
      </MenuList>
    </TableButton>
  );
};

export default TableButtonProducts;
