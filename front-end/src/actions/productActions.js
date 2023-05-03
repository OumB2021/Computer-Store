import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants.js";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("api/products");

    dispatch({ type: PRODUCT_LIST_SUCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};
