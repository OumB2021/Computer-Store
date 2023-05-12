import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers.js";
import { CartReducer } from "./reducers/cartReducers.js";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: CartReducer,
});

const cartItemsFromState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cart: { cartItems: cartItemsFromState },
};
const middleware = [thunk];
const store = configureStore(
  {
    reducer,
  },

  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
