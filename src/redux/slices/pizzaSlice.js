import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("fetchPizzas/fetchPizzasStatus", async (params) => {
  const { pageCount, categories, sort, order, search } = params;
  const { data } = await axios(
    `https://62a30a6421232ff9b2169b1b.mockapi.io/items?page=${pageCount}&limit=8&${categories}${sort}${order}${search}`,
  );
  return data;
});

const initialState = {
  pizzas: [],
  status: "loading",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending](state) {
      state.pizzas = [];
      state.status = "loading";
    },
    [fetchPizzas.fulfilled](state, action) {
      state.pizzas = action.payload;
      state.status = "succes";
    },
    [fetchPizzas.rejected](state) {
      state.pizzas = [];
      state.status = "error";
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
