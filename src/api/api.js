import axios from "axios";

const url = `https://62a30a6421232ff9b2169b1b.mockapi.io/items?`;
export const api = {
  async getPizzas({ pageCount, categories, sort, order, search }) {
    const { data } = await axios.get(
      `${url}page=${pageCount}&limit=8&${categories}${sort}${order}${search}`,
    );
    return data;
  },
};
