import { createStore } from "@reduxjs/toolkit";
import productReducer from "../modules/main/store/reducers";

const store = createStore(productReducer);

export default store;
