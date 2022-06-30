import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesType, FilterSliceType } from "./type";

const initialState: FilterSliceType = {
  pageCount: 1,
  categoryesId: 0,
  sortType: { name: "популярности⬇", sortProperty: "rating" },
  categories: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  listCategories: [
    { name: "популярности", sortProperty: "rating" },
    { name: " ценапо возрастанию", sortProperty: "-price" },
    { name: "цена по убыванию", sortProperty: "price" },
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryesId = action.payload;
    },
    setSortType(state, action: PayloadAction<CategoriesType>) {
      state.sortType = action.payload;
    },
    setFilters(state, action: PayloadAction<any>) {
      state.categoryesId = Number(action.payload.categoryesId);
      state.sortType = action.payload.sortType;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload + 1;
    },
  },
});

export const { setCategoryId, setSortType, setFilters, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
