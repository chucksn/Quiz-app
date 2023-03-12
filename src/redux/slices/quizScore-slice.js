import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const quizScore_slice = createSlice({
  name: "quizScore",
  initialState,
  reducers: {
    setQuizScoreStarted: (state) => {
      return (state = true);
    },
    resetQuizScoreStarted: (state) => {
      return (state = initialState);
    },
  },
});

export const { setQuizScoreStarted, resetQuizScoreStarted } =
  quizScore_slice.actions;
export default quizScore_slice.reducer;
