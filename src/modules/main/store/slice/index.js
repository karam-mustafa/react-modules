import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchProdcts = createAsyncThunk(
  "fetch-products",
  async () => {
    const response = await axiosInstance
      .get("https://dummyjson.com/products")
      .then((res) => {
        return res.data.products;
      });
    return response;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProdcts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
