// @ts-nocheck

import axios from "axios";

const url = `https://62a30a6421232ff9b2169b1b.mockapi.io/items`;
export const api = {
  async getPizzas({ pageCount, categorie, sort, order, search }) {
    const { data } = await axios.get(
      `${url}?page=${pageCount}&limit=8&${categorie}${sort}${order}${search}`,
    );
    return data;
  },
  async getFullPizza({ id }) {
    const { data } = await axios.get(url + "/" + id);
    return data;
  },
};
