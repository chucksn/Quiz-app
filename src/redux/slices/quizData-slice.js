import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const quizData_slice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setQuizData } = quizData_slice.actions;
export default quizData_slice.reducer;
