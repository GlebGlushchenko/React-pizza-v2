import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoriesType = {
  name: string;
  sortProperty: string;
};

type FilterSliceType = {
  pageCount: number;
  categoryesId: number;
  sortType: CategoriesType;
  categories: string[];
};

const initialState: FilterSliceType = {
  pageCount: 1,
  categoryesId: 0,
  sortType: { name: "популярности⬇", sortProperty: "rating" },
  categories: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
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
