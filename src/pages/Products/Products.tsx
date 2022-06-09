import React from "react";

import { ProductCard } from "components";
import { selectors, useAppSelector } from "store";
import styled from "styled-components";

const Products: React.FC = () => {
  const products = useAppSelector(selectors.products.getProducts);
  const groups = [
    "Хлебобулочные изделия",
    "Молочная продукция",
    "Овощи и фрукты",
  ];
  const [selectGroup, setSelectGroup] = React.useState(0);
  return (
    <Root>
      <ProductGroups>
        <Header>Категории:</Header>
        <Border />
        <Groups>
          {groups.map((group, index) => (
            <OneGroup
              onClick={() => setSelectGroup(index)}
              isSelect={index === selectGroup}
              key={index}
            >
              {group}
            </OneGroup>
          ))}
        </Groups>
      </ProductGroups>
      <ProductsItem>
        {products?.map((product, index) => {
          if (product.productType === selectGroup) {
            return <ProductCard key={index} product={product} />;
          }
        })}
      </ProductsItem>
    </Root>
  );
};

export default Products;

const Root = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 20px;
`;
const ProductGroups = styled.div`
  padding-right: 50px;
  padding-left: 30px;
  width: 30%;
`;
const Header = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.primary};
`;
const Border = styled.div`
  width: 290px;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray1};
`;
const Groups = styled.div``;
const OneGroup = styled.button<{ isSelect: boolean }>`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  background-color: ${({ theme, isSelect }) =>
    isSelect ? theme.colors.gray1 : "transparent"};
  border: none;
  text-align: start;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 20px;
  border-radius: 100px;
  color: ${({ theme, isSelect }) =>
    isSelect ? theme.colors.secondary : theme.colors.primary};
  cursor: pointer;
`;
const ProductsItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
