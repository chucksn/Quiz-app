import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const startQuiz_slice = createSlice({
  name: "startQuiz",
  initialState,
  reducers: {
    setQuizStarted: (state) => {
      return (state = true);
    },
    resetQuizStarted: (state) => {
      return (state = initialState);
    },
  },
});

export const { setQuizStarted, resetQuizStarted } = startQuiz_slice.actions;
export default startQuiz_slice.reducer;
