import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plusProduct(state, action) {
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
    minusProduct(state, action) {
      const finditem = state.items.find((obj) => obj.id === action.payload.id);
      if (finditem) {
        finditem.count--;
      }
      if (finditem.count === 0) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum - obj.price;
      }, state.totalPrice);
    },

    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
// SELECTORS
export const selectCart = (state) => state.cart;
export const selectCartItem = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
//===============================================================================================//
export const { plusProduct, removeProduct, clearCart, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
