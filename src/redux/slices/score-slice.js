import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const score_slice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setAddScore: (state) => {
      return state + 1;
    },
    resetScore: (state) => {
      return (state = initialState);
    },
  },
});

export const { setAddScore, resetScore } = score_slice.actions;
export default score_slice.reducer;
