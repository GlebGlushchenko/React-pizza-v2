import { RootState } from "../../store";

// SELECTORS
export const selectCart = (state: RootState) => state.cart;
export const selectCartItem = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
//===============================================================================================//
