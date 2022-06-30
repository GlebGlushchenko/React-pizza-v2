export type ParamsType = {
  categorie: string;
  order: string;
  pageCount: number;
  search: string;
  sort: string;
};
export interface CartItemType {
  id: string;
  description: string;
  title: string;
  price: number;
  imgUrl: string;
  vegan: boolean;
  sizePIzza: number[];
  doughType: string[];
  types: number[];
}

export interface PizzaSliceType {
  pizzas: CartItemType[];
  fullpizza: CartItemType;
  status: string;
}
