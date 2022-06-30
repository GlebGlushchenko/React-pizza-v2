export type CartItemType = {
  imgUrl: string;
  title: string;
  type: string;
  size: number;
  count: number;
  price: number;
  id: string;
};

export type CartType = {
  totalPrice: number;
  items: CartItemType[];
};
