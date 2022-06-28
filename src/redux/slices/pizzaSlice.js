import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchPizzas = createAsyncThunk("fetchPizzas/fetchPizzasStatus", async (params) => {
  const { pageCount, categorie, sort, order, search } = params;
  return api.getPizzas({ pageCount, categorie, sort, order, search });
});

export const fetchFullPizza = createAsyncThunk(
  "fetchFullPizza/fetchFullPizzaStatus",
  async (id) => {
    return api.getFullPizza({ id });
  },
);

const initialState = {
  pizzas: [],
  fullpizza: {},
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
    [fetchFullPizza.fulfilled](state, action) {
      state.fullpizza = action.payload;
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
