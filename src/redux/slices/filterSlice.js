import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageCount: 1,
  categoryesId: 0,
  sortType: { name: "популярности⬇", sortProperty: "rating" },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryesId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setFilters(state, action) {
      state.categoryesId = Number(action.payload.selectedCategorie);
      state.sortType = action.payload.sort;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload + 1;
    },
  },
});

export const { setCategoryId, setSortType, setFilters, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
