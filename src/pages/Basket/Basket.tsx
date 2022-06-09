import React from "react";

import { BasketCard, Button, OrderCard } from "components";
import { useNavigate } from "react-router-dom";
import { actions, selectors, useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

const Basket: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUser = useAppSelector(selectors.auth.hasToken);
  const basketProducts = useAppSelector(selectors.orders.getBasketProducts);
  const orderProducts = basketProducts.map((basketProduct) => {
    return {
      productId: basketProduct.product.id,
      numberProducts: basketProduct.number,
    };
  });
  const totalCost = () => {
    let cost = 0;
    basketProducts.map((basketProduct) => {
      cost += basketProduct.product.cost * basketProduct.number;
    });
    return cost;
  };
  React.useEffect(() => {
    if (!isUser) {
      navigate("/auth");
    }
  }, [navigate]);
  const handleMakeOrder = async () => {
    await dispatch(actions.orders.makeOrder({ products: orderProducts }));
    setTimeout(() => dispatch(actions.orders.clearBasket()), 10000);
  };
  return (
    <Root>
      {!!basketProducts?.length ? (
        <>
          <Header>Ваши товары</Header>
          <Products>
            {basketProducts.map((basketProduct, index) => (
              <BasketCard
                key={index}
                product={basketProduct.product}
                number={basketProduct.number}
              />
            ))}
          </Products>
          <Border />
          <AboutProducts>
            <Cost>ИТОГО: {totalCost()} р.</Cost>
            <CountProducts>
              Кол-во товаров: {basketProducts.length}
            </CountProducts>
          </AboutProducts>
          <OrderCard makeOrder={handleMakeOrder} />
        </>
      ) : (
        <EmptyBasket>
          К сожалению, у вас пока нет товаров в корзине =(
          <GoBuyButton>
            <Button
              onClick={() => navigate("/")}
              variant="primary"
              value="За покупками"
            />
          </GoBuyButton>
        </EmptyBasket>
      )}
    </Root>
  );
};

export default Basket;

const Root = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Border = styled.div`
  width: 80%;
  height: 1px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const AboutProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: end;
  padding-right: 150px;
  padding-top: 20px;
`;
const Cost = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;
const CountProducts = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 34px;
`;
const Header = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 41px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const EmptyBasket = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 41px;
`;
const GoBuyButton = styled.div`
  padding-top: 30px;
  width: 200px;
`;
