import React, { useEffect } from "react";

import { Header } from "components";
import { Auth, Basket, History, Products } from "pages";
import { Route, Routes } from "react-router-dom";
import { actions, useAppDispatch } from "store";
import styled from "styled-components";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.products.getProducts());
  });
  return (
    <Root>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Root>
  );
};

export default App;

const Root = styled.div`
  min-height: 100vh;
`;
