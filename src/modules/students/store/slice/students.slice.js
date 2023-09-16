import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  return await axiosInstance
    .get("https://dummyjson.com/users")
    .then((res) => res.data.users);
});

const studentsReducer = createSlice({
  name: "students",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default studentsReducer.reducer;
