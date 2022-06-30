import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { CartItemType, ParamsType, PizzaSliceType } from "./type";

export const fetchPizzas = createAsyncThunk(
  "fetchPizzas/fetchPizzasStatus",
  async (params: ParamsType) => {
    const { pageCount, categorie, sort, order, search } = params;
    return api.getPizzas(pageCount, categorie, sort, order, search);
  },
);

export const fetchFullPizza = createAsyncThunk(
  "fetchFullPizza/fetchFullPizzaStatus",
  async (id: string) => {
    return api.getFullPizza(id);
  },
);

const initialState: PizzaSliceType = {
  pizzas: [],
  fullpizza: {} as CartItemType,
  status: "loading",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<CartItemType[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<any>) => {
      state.pizzas = action.payload;
      state.status = "succes";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = "error";
    });
    builder.addCase(fetchFullPizza.fulfilled, (state, action) => {
      state.fullpizza = action.payload;
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
