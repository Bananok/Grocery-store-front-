import { combineReducers } from "@reduxjs/toolkit";

import * as authDuck from "./auth";
import * as ordersDuck from "./orders";
import * as productsDuck from "./products";
import * as userDuck from "./user";

const rootReducer = combineReducers({
  auth: authDuck.reducer,
  user: userDuck.reducer,
  products: productsDuck.reducer,
  orders: ordersDuck.reducer,
});
export const actions = {
  auth: authDuck.actions,
  user: userDuck.actions,
  products: productsDuck.actions,
  orders: ordersDuck.actions,
};
export const selectors = {
  auth: authDuck.selectors,
  user: userDuck.selectors,
  products: productsDuck.selectors,
  orders: ordersDuck.selectors,
};
export default rootReducer;
