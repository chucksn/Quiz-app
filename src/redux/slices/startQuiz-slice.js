import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const startQuiz_slice = createSlice({
  name: "startQuiz",
  initialState,
  reducers: {
    setQuizStart: (state) => {
      return (state = true);
    },
    resetQuizStart: (state) => {
      return (state = initialState);
    },
  },
});

export const { setQuizStart, resetQuizStart } = startQuiz_slice.actions;
export default startQuiz_slice.reducer;
