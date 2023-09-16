import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import productReducer from "../modules/main/store/reducers";
import reduxThunk from "redux-thunk";
import productSlice from "../modules/main/store/slice";
const store = configureStore(
  {
    reducer: {
      products: productSlice,
    },
  },
  applyMiddleware(reduxThunk)
);

export default store;
