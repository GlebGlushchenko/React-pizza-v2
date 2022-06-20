import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice.js";
import searchSlice from "./slices/searchSlice.js";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    search: searchSlice,
  },
});