import React from "react";

import BasketCard from "components/BasketCard";
import styled from "styled-components";
import { Order } from "types";

const HistoryCard: React.FC<HistoryCardProps> = ({ order }) => {
  const { productOrders, createdAt, cost } = order;
  return (
    <Root>
      <Headers>
        <Date>{createdAt.slice(0, 10)}</Date>
        <Cost>Сумма заказа: {cost} р.</Cost>
      </Headers>
      <Border></Border>
      <Products>
        {productOrders.map((productOrder) => {
          return (
            <BasketCard
              isBought
              product={productOrder.product}
              number={productOrder.numberProducts}
            />
          );
        })}
      </Products>
    </Root>
  );
};

export default HistoryCard;

interface HistoryCardProps {
  order: Order;
}

const Root = styled.div`
  width: 1100px;
  border-radius: 40px;
  background-color: #e4f9d3;
  margin-top: 50px;
  padding: 10px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 20px;
`;
const Headers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Date = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 41px;
`;
const Cost = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;
const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
`;
