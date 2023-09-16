import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import productReducer from "../modules/main/store/reducers";
import reduxThunk from "redux-thunk";
const store = configureStore(
  {
    reducer: {
      products: productReducer,
    },
  },
  applyMiddleware(reduxThunk)
);

export default store;
