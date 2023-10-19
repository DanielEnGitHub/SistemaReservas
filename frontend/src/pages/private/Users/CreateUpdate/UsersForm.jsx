import React from "react";

import InputFormValidation from "../../../../components/Inputs/InputFormValidation/InputFormValidation";
import InputSelect from "../../../../components/Inputs/InputSelect";
import { user_role } from "../../../../Utils/constants";

import {
  EmailIcon,
  PasswordIcon,
  PerfilIcon,
  SucursalIcon,
} from "../../../../Utils/icons";

const UsersForm = ({ userRole, errors, register, control, isUpdate }) => {
  return (
    <>
      <InputFormValidation
        Icon={PerfilIcon}
        placeholder="Ingresa el nombre usuario"
        errors={errors}
        register={register}
        key_name="user_name"
        label="Escribe el nombre del usuario"
      />

      <InputFormValidation
        type="email"
        Icon={EmailIcon}
        placeholder="Ingresa el correo usuario"
        errors={errors}
        register={register}
        key_name="email"
        label="Escribe el correo del usuario"
        disabled={isUpdate}
      />

      <InputSelect
        options={user_role}
        defaultValue={isUpdate}
        defaultOptionValue={userRole}
        placeholder="Selecciona el rol del usuario"
        errors={errors}
        register={register}
        control={control}
        key_name="user_role"
        label="Selecciona el rol del usuario"
        validation={true}
      />

      <InputFormValidation
        Icon={SucursalIcon}
        placeholder="Ingresa la sucursal del usuario"
        errors={errors}
        register={register}
        key_name="sucursal"
        label="Escribe la sucursal del usuario"
      />

      {!isUpdate && (
        <InputFormValidation
          type="password"
          Icon={PasswordIcon}
          placeholder="Ingresa la contraseña del usuario"
          errors={errors}
          register={register}
          key_name="password"
          label="Escribe la contraseña del usuario"
        />
      )}
    </>
  );
};

export default UsersForm;
