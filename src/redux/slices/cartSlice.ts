import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFormLS";
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
const cartData = getCartFromLS();
console.log(cartData.items);

const initialState: CartType = {
  totalPrice: cartData.totalPrice,
  items: cartData.items,
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

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusProduct(state, action: PayloadAction<string>) {
      const finditem = state.items.find((obj) => obj.id === action.payload);
      if (finditem) {
        finditem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeProduct(state, action: PayloadAction<CartItemType>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice = calcTotalPrice(state.items);
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
