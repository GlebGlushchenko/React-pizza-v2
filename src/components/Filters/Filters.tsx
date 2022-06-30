import React from "react";
import { CategoriesType } from "../../redux/slices/filter/type";
import Categories from "../Categories";
import Sort from "../Sort";

type FiltersProps = {
  handlerSelectCategory: (index: number) => void;
  categories: string[];
  categoryesId: number;
  sortType: CategoriesType;
  listCategories: CategoriesType[];
};

export const Filters: React.FC<FiltersProps> = React.memo(
  ({ handlerSelectCategory, categories, categoryesId, sortType, listCategories }) => {
    return (
      <div className="content__top">
        <Categories
          handlerSelectCategory={handlerSelectCategory}
          categories={categories}
          categoryesId={categoryesId}
        />
        <Sort sortType={sortType} listCategories={listCategories} />
      </div>
    );
  },
);

export default Filters;
