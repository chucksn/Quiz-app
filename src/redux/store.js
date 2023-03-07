import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    category: categorySliceReducer,
  },
});
