import { RootState } from "../../store";

export const fullPizzaSelector = (state: RootState) => state.pizza.fullpizza;
export const pizzaSelector = (state: RootState) => state.pizza;
