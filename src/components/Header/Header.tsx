import React from "react";

import { Logo } from "assets";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUser = useAppSelector(selectors.auth.hasToken);
  const handleLogIn = () => {
    navigate("/auth");
  };
  const handleLogOut = () => {
    dispatch(actions.auth.logout());
    navigate("/auth");
  };
  return (
    <Root>
      <LogoItem>
        <Logo width={210} height={310} />
      </LogoItem>
      <Headers isAuth={isUser}>
        <Products onClick={() => navigate("/")}>Каталог товаров</Products>
        <Basket onClick={() => navigate("/basket")} isAuth={isUser}>
          Корзина
        </Basket>
        <History onClick={() => navigate("/history")} isAuth={isUser}>
          История заказов
        </History>
      </Headers>
      <Logout>
        <Button
          onClick={isUser ? handleLogOut : handleLogIn}
          variant="secondary"
          value={isUser ? "Выйти" : "Войти"}
        />
      </Logout>
    </Root>
  );
};

export default Header;

interface IsUserProps {
  isAuth: boolean;
}

const Root = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.gray2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;
const LogoItem = styled.div`
  padding-top: 30px;
`;
const Headers = styled.div<IsUserProps>`
  display: flex;
  align-items: center;
  width: ${({ isAuth }) => (isAuth ? "600px" : "max-content")};
  justify-content: space-between;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green2};
  padding: 20px;
`;
const Products = styled.button`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;
  border: none;
  background: transparent;
  :hover {
    color: ${({ theme }) => theme.colors.green4};
  }
`;
const Basket = styled.button<IsUserProps>`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;
  display: ${({ isAuth }) => (isAuth ? "block" : "none")};
  border: none;
  background: transparent;
  :hover {
    color: ${({ theme }) => theme.colors.green4};
  }
`;
const History = styled.button<IsUserProps>`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;
  display: ${({ isAuth }) => (isAuth ? "block" : "none")};
  border: none;
  background: transparent;
  :hover {
    color: ${({ theme }) => theme.colors.green4};
  }
`;
const Logout = styled.div`
  width: 120px;
`;
