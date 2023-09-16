import axiosInstance from "../../../../utils/axios";
import { FETCH_PRODUCTS } from "./types";

export const fetchProdcts = (data) => async (dispatch) => {
  return axiosInstance.get("https://dummyjson.com/products").then((res) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data.products,
    });
    return res.data.products;
  });
};

export const searchProdcts = (searchValue, signal) => async (dispatch) => {
  return axiosInstance
    .get(`https://dummyjson.com/products/search?q=${searchValue}`, { signal })
    .then((res) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data.products,
      });
      return res.data.products;
    });
};
