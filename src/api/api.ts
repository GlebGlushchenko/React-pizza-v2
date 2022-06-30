import axios from "axios";
import { CartItemType } from "../redux/slices/pizzaSlice";

const url = `https://62a30a6421232ff9b2169b1b.mockapi.io/items`;
export const api = {
  async getPizzas(
    pageCount: number,
    categorie: string,
    sort: string,
    order: string,
    search: string,
  ) {
    const { data } = await axios.get(
      `${url}?page=${pageCount}&limit=8&${categorie}${sort}${order}${search}`,
    );
    return data as CartItemType;
  },
  async getFullPizza(id: string) {
    const { data } = await axios.get(url + "/" + id);
    return data;
  },
};
