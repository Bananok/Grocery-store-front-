import React from "react";

import { actions, useAppDispatch } from "store";
import styled from "styled-components";
import { Product } from "types";

const BasketCard: React.FC<BasketCardProps> = ({
  product,
  number,
  isBought,
}) => {
  const dispatch = useAppDispatch();
  const { name, cost, img, id } = product;
  const urlImg = `https://drive.google.com/uc?export=view&id=${img}`;
  const handleDeleteCard = () => {
    dispatch(actions.orders.removeInBasket({ productId: id }));
  };
  return (
    <Root>
      <ImgProduct alt="product" src={urlImg} />
      <NameProduct>{name}</NameProduct>
      <CountProduct>{number}</CountProduct>
      <Cost>{cost * number} р.</Cost>
      <DeleteButton onClick={handleDeleteCard} isBought={isBought}>
        Удалить
      </DeleteButton>
    </Root>
  );
};

export default BasketCard;

interface BasketCardProps {
  product: Product;
  number: number;
  isBought?: boolean;
}

const Root = styled.div`
  position: relative;
  width: 1000px;
  height: 150px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
`;
const ImgProduct = styled.img`
  height: 90%;
  width: 140px;
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray1}`};
`;
const NameProduct = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 34px;
  width: 100px;
`;
const CountProduct = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  border: 1px solid black;
  padding: 2px;
`;
const Cost = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;
const DeleteButton = styled.button<{ isBought?: boolean }>`
  background-color: transparent;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  display: ${({ isBought }) => (isBought ? "none" : "block")};
`;
