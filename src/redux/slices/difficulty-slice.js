import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const difficulty_slice = createSlice({
  name: "difficulty",
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      return action.payload;
    },
    resetDifficulty: () => {
      return initialState;
    },
  },
});

export const { setDifficulty, resetDifficulty } = difficulty_slice.actions;
export default difficulty_slice.reducer;
