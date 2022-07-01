export type ParamsType = {
  categorie: string;
  order: string;
  pageCount: number;
  search: string;
  sort: string;
};
export interface CartItemType {
  vegan: boolean;
  description: string;
  weight: number[];
  imgUrl: string;
  title: string;
  types: string[];
  doughType: string[];
  sizePizza: number[];
  price: number;
  id: string;
}

export interface PizzaSliceType {
  pizzas: CartItemType[];
  fullpizza: CartItemType;
  status: string;
}

export interface PizzaBlockTypes {
  vegan: boolean;
  description: string;
  weight: number[];
  imgUrl: string;
  title: string;
  types: string[];
  doughType: string[];
  sizePizza: number[];
  price: number;
  id: string;
}

export interface PizzaBlockProps {
  obj: {
    vegan: boolean;
    description: string;
    weight: number[];
    imgUrl: string;
    title: string;
    types: string[];
    doughType: string[];
    sizePizza: number[];
    price: number;
    id: string;
  };
}
