import React from "react";
import { useWhyDidYouUpdate } from "ahooks";

type CategoriesPropsType = {
  categories: string[];
  categoryesId: number;
  handlerSelectCategory: (index: number) => void;
};

export const Categories: React.FC<CategoriesPropsType> = React.memo(
  ({ handlerSelectCategory, categories, categoryesId }) => {
    useWhyDidYouUpdate("Categories", {
      handlerSelectCategory,
      categories,
      categoryesId,
    });

    return (
      <div className="categories">
        <ul>
          {categories.map((item: string, index: number) => (
            <li
              onClick={() => handlerSelectCategory(index)}
              className={categoryesId === index ? "active" : ""}
              key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
export default Categories;
