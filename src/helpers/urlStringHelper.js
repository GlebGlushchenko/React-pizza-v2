export const urlString = {
  sort(sortType) {
    return `&sortBy=${sortType.sortProperty.replace("-", "")}`; // Sort
  },
  search(searchValue) {
    return searchValue ? `&title=${searchValue}` : ""; // Search
  },
  order(sortType) {
    return `&order=${sortType.sortProperty.includes("-") ? "asc" : "desc"}`; // Order
  },
  categories(selectedCategorie) {
    return selectedCategorie > 0 ? `category=${selectedCategorie}` : ""; // Filter
  },
};
