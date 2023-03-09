import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const firstPopup_slice = createSlice({
  name: "startQuiz",
  initialState,
  reducers: {
    setFirstPopup_hidden: (state) => {
      return (state = false);
    },
    resetFirstPopup: (state) => {
      return (state = initialState);
    },
  },
});

export const { setFirstPopup_hidden, resetFirstPopup } =
  firstPopup_slice.actions;
export default firstPopup_slice.reducer;
