import React from "react";

import { Button } from "components/UI";
import { useNavigate } from "react-router-dom";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";
import { Product } from "types";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isUser = useAppSelector(selectors.auth.hasToken);
  const { name, cost, img } = product;
  const [numberProduct, setNumberProduct] = React.useState(1);
  const [hasAdd, setHasAdd] = React.useState(false);
  const urlImg = `https://drive.google.com/uc?export=view&id=${img}`;
  const handleAddProduct = () => {
    if (!isUser) {
      navigate("/auth");
    }
    dispatch(actions.orders.addInBasket({ product, number: numberProduct }));
    setHasAdd(true);
  };
  return (
    <Root>
      <ImgProduct alt="product" src={urlImg} />
      <ProductInfo>
        <Cost>{cost} р.</Cost>
        <ProductName>{name}</ProductName>
        <CountProduct>
          <MinusButton
            disabled={numberProduct === 1 || hasAdd}
            onClick={() => setNumberProduct(numberProduct - 1)}
          >
            &#8722;
          </MinusButton>
          <NumberProduct>{numberProduct}</NumberProduct>
          <PlusProduct
            disabled={hasAdd}
            onClick={() => setNumberProduct(numberProduct + 1)}
          >
            +
          </PlusProduct>
          <AddProductButton>
            {hasAdd ? (
              <TextAddProduct>Добавлено</TextAddProduct>
            ) : (
              <Button
                onClick={handleAddProduct}
                variant="primary"
                value="В корзину"
              />
            )}
          </AddProductButton>
        </CountProduct>
      </ProductInfo>
    </Root>
  );
};

export default ProductCard;

interface ProductCardProps {
  product: Product;
}

const Root = styled.div`
  width: 270px;
  height: 420px;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 20px;
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray1}`};
`;
const ImgProduct = styled.img`
  width: 100%;
  height: 60%;
`;
const ProductInfo = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;
const Cost = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;
const ProductName = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 34px;
`;
const CountProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MinusButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
const NumberProduct = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 4px;
  height: max-content;
  border: 1px solid black;
`;
const PlusProduct = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
const AddProductButton = styled.div`
  width: 50%;
`;
const TextAddProduct = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 20px;
  line-height: 27px;
`;
