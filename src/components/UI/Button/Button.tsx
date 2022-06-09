import React from "react";

import styled from "styled-components";

import { THEMES } from "./utils";
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <Root variant={variant} {...props}>
      {props.value}
    </Root>
  );
};
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    RootProps {}
interface RootProps {
  variant: "primary" | "secondary";
}

export default Button;

const Root = styled.button<RootProps>`
  height: 40px;
  width: 100%;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  ${({ variant }) => THEMES[variant]};
`;
