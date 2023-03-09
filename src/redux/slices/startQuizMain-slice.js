import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const startQuizMain_slice = createSlice({
  name: "startQuizMain",
  initialState,
  reducers: {
    setQuizMainStarted: (state) => {
      return (state = true);
    },
    resetQuizMainStarted: (state) => {
      return (state = initialState);
    },
  },
});

export const { setQuizMainStarted, resetMainQuizStarted } =
  startQuizMain_slice.actions;
export default startQuizMain_slice.reducer;
