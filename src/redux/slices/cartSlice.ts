import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../helpers/getCartFormLS";
import { RootState } from "../store";

export type CartItemType = {
  imgUrl: string;
  title: string;
  type: string;
  size: number;
  count: number;
  price: number;
  id: string;
};

type CartType = {
  totalPrice: number;
  items: CartItemType[];
};
const initialState: CartType = {
  totalPrice: 0,
  items: getCartFromLS(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plusProduct(state, action: PayloadAction<CartItemType>) {
      const finditem = state.items.find((obj) => obj.id === action.payload.id);
      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    minusProduct(state, action: PayloadAction<string>) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum - obj.price;
      }, state.totalPrice);
    },

    removeProduct(state, action: PayloadAction<CartItemType>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
// SELECTORS
export const selectCart = (state: RootState) => state.cart;
export const selectCartItem = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
//===============================================================================================//
export const { plusProduct, removeProduct, clearCart, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
