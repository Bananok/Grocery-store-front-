export type User = {
  login: string;
  name: string;
};
export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};

export type DefaultRejectValue = {
  message: string;
  error: string;
  statusCode: number;
};

export type Product = {
  id: string;
  productType: number;
  name: string;
  cost: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};
export type Order = {
  id: string;
  createdAt: string;
  cost: number;
  productOrders: { product: Product; numberProducts: number }[];
};
