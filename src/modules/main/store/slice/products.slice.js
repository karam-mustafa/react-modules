import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchProdcts = createAsyncThunk("products/fetch", async () => {
  return await axiosInstance
    .get("https://dummyjson.com/products")
    .then((res) => res.data.products);
});

export const searchProdcts = createAsyncThunk(
  "products/search",
  async (value, siganl) => {
    return await axiosInstance
      .get(`https://dummyjson.com/products/search?q=${value}`, {
        siganl,
      })
      .then((res) => res.data.products);
  }
);

const productReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProdcts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(searchProdcts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productReducer.reducer;
