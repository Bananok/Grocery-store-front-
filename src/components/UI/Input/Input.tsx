import React from "react";

import { ControllerFieldState } from "react-hook-form";
import styled from "styled-components";

const Input: React.FC<InputProps> = (props) => {
  const { error } = props.fieldState;
  return (
    <Root>
      <InputInsert {...props} />
      <ErrorMessage>{error?.message || ""}</ErrorMessage>
    </Root>
  );
};

export default Input;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldState: ControllerFieldState;
}
const Root = styled.div`
  position: relative;
  width: 100%;
  max-height: max-content;
  display: flex;
  flex-direction: column;
`;
const InputInsert = styled.input`
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray1};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  border-radius: 20px;
  font-size: 20px;
  line-height: 27px;
  height: 30px;
  padding: 20px;
  border: none;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;
const ErrorMessage = styled.div`
  font-family: "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  height: 20px;
`;
