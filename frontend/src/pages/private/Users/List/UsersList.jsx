import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  getUsers,
  selectLoadingUsers,
  selectUsers,
  selectUserSelected,
  setIsUpdate,
  selectPage,
  changeStateUser,
} from "../../../../redux/features/userSlice";

import { useDisclosure } from "@chakra-ui/react";

import CreateUpdate from "../CreateUpdate/CreateUpdate";

import HeaderViewContent from "../../../../components/HeaderViewContent";
import Table from "../../../../components/Table";
import { role_name } from "../../../../Utils/constants";
import { TableButtonUsers } from "../../../../components/Buttons/TableButton";
import ModalAlert from "../../../../components/Modal/ModalAlert";

const UsersList = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "user_name",
      },
      {
        Header: "Correo",
        accessor: "email",
      },

      {
        Header: "Rol",
        accessor: "role",
        Cell: ({ value }) => role_name[value],
      },
      {
        Header: "Sucursal",
        accessor: "sucursal",
      },
      {
        Header: "",
        accessor: "id",
        Cell: ({ row }) => (
          <TableButtonUsers
            row={row}
            onClick={onOpen2}
            onOpenModalUpdate={onOpen}
          />
        ),
      },
    ],
    []
  );

  // modal create update user
  const { isOpen, onOpen, onClose } = useDisclosure();

  // modal alert
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const loading = useSelector(selectLoadingUsers);
  const userSelected = useSelector(selectUserSelected);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ isNextPage: false, isPrevPage: false }));
  }, [dispatch]);

  const handleOnContinue = () => {
    let new_state = { user_id: userSelected.id };

    console.log(userSelected);

    dispatch(changeStateUser(new_state));
  };

  const onOpenModal = (row) => {
    dispatch(setIsUpdate(false));
    onOpen();
  };

  // Pagination data
  const page = useSelector(selectPage);

  const nextPageTable = () => {
    dispatch(nextPage());
    dispatch(getUsers({ isNextPage: true, isPrevPage: false }));
  };

  const prevPageTable = () => {
    dispatch(prevPage());
    dispatch(getUsers({ isNextPage: false, isPrevPage: true }));
  };

  return (
    <>
      {/* Modal CreateUpdate */}
      <CreateUpdate isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      {/* Modal Alert (change user status)*/}
      <ModalAlert
        subTitleText={`estas por eliminar el usuario ${userSelected?.user_name}`}
        description="Al eliminar el usuario, ya no podras recuperarlo, "
        emphasisDescription="esta accion no se podrá revertir."
        isOpen={isOpen2}
        onClose={onClose2}
        onContinue={handleOnContinue}
      />

      {/* Filter, searcher and create button */}
      <HeaderViewContent
        titleView="Usuarios"
        textButton="Nuevo usuario"
        showSearchButton={false}
        showFilterButton={false}
        onOpen={onOpenModal}
      />

      {/* Event table */}
      <Table
        columns={columns}
        data={users}
        loading={loading}
        page={page}
        prevPageTable={prevPageTable}
        nextPageTable={nextPageTable}
      />
    </>
  );
};

export default UsersList;
