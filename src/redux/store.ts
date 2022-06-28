import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";
import filterSlice from "./slices/filterSlice.js";
import searchSlice from "./slices/searchSlice.js";
import pizzaSlice from "./slices/pizzaSlice.js";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    search: searchSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
