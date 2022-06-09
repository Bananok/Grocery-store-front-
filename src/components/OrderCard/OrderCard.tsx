import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "components";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { validators } from "utils";

interface FormInputs {
  phone: string;
  adress: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ makeOrder }) => {
  const [hasBought, setHasBought] = React.useState(false);
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormInputs>({
    mode: "all",
    resolver: yupResolver(validators.orderValidator),
  });
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    makeOrder();
    setHasBought(true);
  };
  return (
    <Root>
      {hasBought ? (
        <TextSuccessfulOrder>
          Ваш заказ успешко оформлен! Наш оператор свяжется с вами для
          подтверждения заказа
        </TextSuccessfulOrder>
      ) : (
        <>
          <Header>Оформление заказа</Header>
          <OrderForm onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, onBlur }, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Контактный телефон"
                  fieldState={fieldState}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              control={control}
              name="adress"
              render={({ field: { onChange, onBlur }, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Домашний адрес"
                  fieldState={fieldState}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <OrderButton>
              <Button
                disabled={!isValid}
                variant="primary"
                value="Оформить заказ"
              />
            </OrderButton>
          </OrderForm>
        </>
      )}
    </Root>
  );
};

export default OrderCard;

interface OrderCardProps {
  makeOrder: () => void;
}

const Root = styled.div`
  border-radius: 50px;
  width: 540px;
  color: ${({ theme }) => theme.colors.primary};
  height: 340px;
  border: ${({ theme }) => `1px solid ${theme.colors.green2}`};
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 40px;
  align-items: center;
`;
const Header = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  padding-bottom: 20px;
`;
const OrderForm = styled.form`
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const OrderButton = styled.div`
  padding-top: 20px;
  width: 190px;
  display: flex;
`;
const TextSuccessfulOrder = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  height: 100%;
  display: flex;
  align-items: center;
`;
