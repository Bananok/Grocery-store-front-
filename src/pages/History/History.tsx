import React from "react";

import { Button, HistoryCard } from "components";
import { useNavigate } from "react-router-dom";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

const History: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUser = useAppSelector(selectors.auth.hasToken);
  const orders = useAppSelector(selectors.orders.getOrders);
  React.useEffect(() => {
    if (!isUser) {
      navigate("/auth");
    }
    dispatch(actions.orders.getOrders());
  }, [navigate]);
  return (
    <Root>
      {!!!orders.length ? (
        <EmptyHistory>
          Пока что вы ничего не заказывали, поспешите это исправить!
          <GoBuyButton>
            <Button
              onClick={() => navigate("/")}
              variant="primary"
              value="Стартуем!"
            />
          </GoBuyButton>
        </EmptyHistory>
      ) : (
        <Orders>
          {orders?.map((order) => (
            <HistoryCard order={order} />
          ))}
        </Orders>
      )}
    </Root>
  );
};

export default History;

const Root = styled.div``;
const EmptyHistory = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  width: 100%;
`;
const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoBuyButton = styled.div`
  padding-top: 30px;
  width: 200px;
`;
