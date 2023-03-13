import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const answerClicked_slice = createSlice({
  name: "answerClicked",
  initialState,
  reducers: {
    setAnswerClicked: (state) => {
      return (state = true);
    },
    resetAnswerClicked: (state) => {
      return (state = initialState);
    },
  },
});

export const { setAnswerClicked, resetAnswerClicked } =
  answerClicked_slice.actions;
export default answerClicked_slice.reducer;
