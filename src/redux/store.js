import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/category-slice";
import startQuizSliceReducer from "./slices/startQuiz-slice";
import difficultySliceReducer from "./slices/difficulty-slice";
import startQuizMainSliceReducer from "./slices/startQuizMain-slice";
import firstPopupSliceReducer from "./slices/firstPopup-slice";

export const store = configureStore({
  reducer: {
    firstPopup: firstPopupSliceReducer,
    category: categorySliceReducer,
    difficulty: difficultySliceReducer,
    quizHasStarted: startQuizSliceReducer,
    quizMainHasStarted: startQuizMainSliceReducer,
  },
});
