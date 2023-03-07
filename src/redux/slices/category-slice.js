import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const category_slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
    resetCategory: () => {
      return initialState;
    },
  },
});

export const { setCategory, resetCategory } = category_slice.actions;
export default category_slice.reducer;
