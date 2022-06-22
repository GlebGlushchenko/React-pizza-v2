import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchPizzas = createAsyncThunk("fetchPizzas/fetchPizzasStatus", async (params) => {
  const { pageCount, categories, sort, order, search } = params;
  return api.getPizzas({ pageCount, categories, sort, order, search });
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
