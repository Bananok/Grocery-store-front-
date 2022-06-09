import React from "react";

import { Login, Register, Tab } from "components";
import styled from "styled-components";

enum NameTab {
  LOGIN = "Вход",
  REGISTER = "Регистрация",
}
const tabs = [NameTab.LOGIN, NameTab.REGISTER];

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Вход");
  const handleSetActiveTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };
  const urlImg = `https://drive.google.com/uc?export=view&id=1hex62A8J72Lsd9EV7VlZN9ODXDRDrOlq`;
  const renderAuth = () => {
    switch (activeTab) {
      case "Вход": {
        return <Login />;
      }
      case "Регистрация": {
        return <Register />;
      }
    }
  };

  return (
    <Root>
      <Header>
        <BigHeader>Добро пожаловать!</BigHeader>
        <SmallHeader>Скидка 50% на первую покупку</SmallHeader>
      </Header>
      <MainLogin>
        <AuthPart>
          <Tab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={handleSetActiveTab}
          />
          <AuthForm>{renderAuth()}</AuthForm>
        </AuthPart>
        <AuthPicture>
          <Background />
          <AuthImg alt="products" src={urlImg} />
        </AuthPicture>
      </MainLogin>
    </Root>
  );
};

export default Auth;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
  padding-bottom: 60px;
`;
const Header = styled.div`
  padding-bottom: 50px;
`;
const BigHeader = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 68px;
  color: ${({ theme }) => theme.colors.primary};
`;
const SmallHeader = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.green2};
`;
const MainLogin = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 800px;
  height: 500px;
  display: flex;
`;
const AuthPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AuthPicture = styled.picture`
  width: 50%;
  position: relative;
`;
const AuthImg = styled.img`
  width: 100%;
  height: 100%;
`;
const Background = styled.div`
  background: rgba(217, 217, 217, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`;
const AuthForm = styled.div`
  width: 80%;
  justify-content: center;
  padding-top: 50px;
`;
