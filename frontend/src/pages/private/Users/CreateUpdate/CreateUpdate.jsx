import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import ModalForm from "../../../../components/Modal/ModalForm";
import UsersForm from "./UsersForm";
import { Skeleton } from "@chakra-ui/react";
import {
  createUser,
  selectIsUpdate,
  selectLoadingSaveUser,
  selectLoadingUpdateUser,
  selectUserDataUpdate,
  updateUser,
} from "../../../../redux/features/userSlice";

const CreateUpdate = ({ isOpen, onClose }) => {
  const [userRole, setUserRole] = useState(0);

  const userSelected = useSelector(selectUserDataUpdate);
  const loading = useSelector(selectLoadingUpdateUser);
  const isUpdate = useSelector(selectIsUpdate);
  const dispatch = useDispatch();
  const modalTitle = isUpdate ? "Editar usuario" : "Nuevo usuario";
  const buttonTitle = isUpdate ? "Actualizar usuario" : "Agregar usuario";

  const {
    getValues,
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const loading_save = useSelector(selectLoadingSaveUser);

  const onSubmit = (data) => {
    if (isUpdate) {
      dispatch(updateUser({ ...data, onClose, reset }));
    } else {
      dispatch(createUser({ ...data, onClose, reset }));
    }
  };

  useEffect(() => {
    if (isUpdate) {
      reset(userSelected);
    } else {
      reset({});
    }
  }, [isUpdate, userSelected]);

  useEffect(() => {
    const values = getValues();

    if (values.role) setUserRole(values.role - 1);
  }, [userSelected]);

  return (
    <>
      <ModalForm
        titleModal={modalTitle}
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        textButtonClose="Cancelar"
        textButtonSubmit={buttonTitle}
        loadingButtonSubmit={loading_save}
      >
        {loading ? (
          <>
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
            <Skeleton
              height="80px"
              boxShadow="card"
              borderRadius="10px"
              startColor="brand.disabled"
              endColor="brand.gray3"
            />
          </>
        ) : (
          <UsersForm
            errors={errors}
            register={register}
            control={control}
            userRole={userRole}
            isUpdate={isUpdate}
          />
        )}
      </ModalForm>
    </>
  );
};

export default CreateUpdate;
