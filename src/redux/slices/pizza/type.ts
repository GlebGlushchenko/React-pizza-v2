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

export type PizzaBlockTypes = {
  vegan: boolean;
  description: string;
  weight: number[];
  imgUrl: string;
  title: string;
  types: [string];
  doughType: [string];
  sizePizza: [number];
  price: number;
  id: string;
};
