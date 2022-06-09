import React from "react";

import styled from "styled-components";
const Tab: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Root>
      {tabs.map((tab, index) => (
        <OneTab
          onClick={() => setActiveTab(tab)}
          key={index}
          isActiveTab={activeTab === tab}
        >
          {tab}
        </OneTab>
      ))}
    </Root>
  );
};
interface TabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (newActiveTab: string) => void;
}

export default Tab;

const Root = styled.div``;
const OneTab = styled.button<{ isActiveTab: boolean }>`
  background-color: transparent;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  border: none;
  padding: 20px;
  color: ${({ isActiveTab, theme }) =>
    isActiveTab ? theme.colors.green2 : theme.colors.gray1};
  border-bottom: ${({ theme, isActiveTab }) =>
    isActiveTab ? `3px solid ${theme.colors.green2}` : "none"};
`;
