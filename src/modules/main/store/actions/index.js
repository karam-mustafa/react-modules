import axiosInstance from "../../../../utils/axios";
import { FETCH_PRODUCTS } from "./types";

export function fetchProdcts(data) {
  return axiosInstance.get("https://dummyjson.com/products").then((res) => {
    return res.data.products;
  });
}

export function searchProdcts(searchValue, signal) {
  return axiosInstance
    .get(`https://dummyjson.com/products/search?q=${searchValue}`, { signal })
    .then((res) => {
      return res.data.products;
    });
}
