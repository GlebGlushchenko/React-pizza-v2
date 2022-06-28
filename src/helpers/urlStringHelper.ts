import { CategoriesType } from "../components/Sort";

export const urlString = {
  sort(sortType: CategoriesType) {
    return `&sortBy=${sortType.sortProperty.replace("-", "")}`; // Sort
  },
  search(searchValue: string) {
    return searchValue ? `&title=${searchValue}` : ""; // Search
  },
  order(sortType: CategoriesType) {
    return `&order=${sortType.sortProperty.includes("-") ? "asc" : "desc"}`; // Order
  },
  categories(selectedCategorie: number) {
    return selectedCategorie > 0 ? `category=${selectedCategorie}` : ""; // Filter
  },
};
