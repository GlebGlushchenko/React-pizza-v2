export type CategoriesType = {
  name: string;
  sortProperty: string;
};

export type FilterSliceType = {
  pageCount: number;
  categoryesId: number;
  sortType: CategoriesType;
  categories: string[];
  listCategories: CategoriesType[];
};
