import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart/slice";
import filterSlice from "./slices/filter/slice";
import searchSlice from "./slices/search/slice";
import pizzaSlice from "./slices/pizza/slice";

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
export const useAppDispatch = () => useDispatch<AppDispatch>();
