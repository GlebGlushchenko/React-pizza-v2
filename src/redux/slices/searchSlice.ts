import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";

type SearchSliceType = {
  searchValue: string;
};

const initialState: SearchSliceType = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

//SELECTORS
export const selectSearchValue = (state: RootState) => state.search.searchValue;
//==================================================//

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
