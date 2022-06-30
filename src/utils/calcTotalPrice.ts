import { CartItemType } from "../redux/slices/cart/type";

export const calcTotalPrice = (items: CartItemType[]) =>
  items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
