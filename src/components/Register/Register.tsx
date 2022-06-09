import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  ErrorOption,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { actions, useAppDispatch } from "store";
import styled from "styled-components";
import { validators } from "utils";

import { Button, Input } from "../UI";

interface FormInputs {
  name: string;
  login: string;
  password: string;
}

const Register: React.FC<RegisterProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { isValid },
  } = useForm<FormInputs>({
    mode: "all",
    resolver: yupResolver(validators.registerValidator),
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { payload, meta } = await dispatch(actions.auth.signUp(data));
    if (meta.requestStatus === "rejected") {
      return setError("login", payload as ErrorOption);
    }
    navigate("/");
  };
  return (
    <Root>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Input
              type="text"
              placeholder="Имя"
              fieldState={fieldState}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="login"
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Input
              type="text"
              placeholder="Логин"
              fieldState={fieldState}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Input
              type="password"
              placeholder="Пароль"
              fieldState={fieldState}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
        <RegisterButton>
          <Button
            disabled={!isValid}
            variant="primary"
            value="Зарегистрироваться"
          />
        </RegisterButton>
      </RegisterForm>
    </Root>
  );
};

export default Register;

interface RegisterProps {}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const RegisterButton = styled.div`
  width: 210px;
  padding-top: 20px;
`;
