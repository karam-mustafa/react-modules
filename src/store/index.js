import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import productsSlice from "../modules/main/store/slice/products.slice";
import teachersSlice from "../modules/teachers/store/slice/teachers.slice";
import studentsSlice from "../modules/students/store/slice/students.slice";

const reducers = {
  reducer: {
    products: productsSlice,
    teachers: teachersSlice,
    students: studentsSlice,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;
