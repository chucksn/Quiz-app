import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/category-slice";
import startQuizSliceReducer from "./slices/startQuiz-slice";
import difficultySliceReducer from "./slices/difficulty-slice";

export const store = configureStore({
  reducer: {
    category: categorySliceReducer,
    quizHasStarted: startQuizSliceReducer,
    difficulty: difficultySliceReducer,
  },
});
