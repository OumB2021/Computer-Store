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
  cart: cartReducer,
});
const initialState = {};
const middleware = [thunk];
const store = configureStore(
  {
    reducer,
  },

  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
