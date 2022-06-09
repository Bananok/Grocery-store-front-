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
  login: string;
  password: string;
}

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    control,
    setError,
    formState: { isValid },
  } = useForm<FormInputs>({
    mode: "all",
    resolver: yupResolver(validators.loginValidator),
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { payload, meta } = await dispatch(actions.auth.signIn(data));
    if (meta.requestStatus === "rejected") {
      return setError("password", payload as ErrorOption);
    }
    navigate("/");
  };
  return (
    <Root>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
        <LoginButton>
          <Button disabled={!isValid} variant="primary" value="Войти" />
        </LoginButton>
      </LoginForm>
    </Root>
  );
};
interface LoginProps {}

export default Login;

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const LoginButton = styled.div`
  width: 190px;
  padding-top: 20px;
`;
