import { Order, Product } from "types";

export type InitialState = {
  basketProducts: {
    product: Product;
    number: number;
  }[];
  isLoading: boolean;
  orders: Order[];
};
export type OrderProducts = {
  products: {
    productId: string;
    numberProducts: number;
  }[];
};
export type MakeOrderResponse = {
  userId: string;
  productOrders: [
    {
      productId: string;
      numberProducts: 2;
      orderId: string;
      id: string;
      updatedAt: string;
      createdAt: string;
    }
  ];
  id: string;
  updatedAt: string;
  createdAt: string;
};
export type OrdersResponse = {
  id: string;
  userId: string;
  updatedAt: string;
  createdAt: string;
  productOrders: [
    {
      id: string;
      orderId: string;
      productId: string;
      numberProducts: number;
      updatedAt: string;
      createdAt: string;
      product: {
        id: string;
        productType: number;
        name: string;
        cost: number;
        img: string;
        updatedAt: string;
        createdAt: string;
      };
    }
  ];
  cost: 76;
}[];
