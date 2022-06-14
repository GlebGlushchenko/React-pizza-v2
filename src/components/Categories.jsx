import React from "react";

export const Categories = ({ selectedCategories, handlerSelectedCategories }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((i, index) => (
          <li
            onClick={() => handlerSelectedCategories(index)}
            className={selectedCategories === index ? "active" : ""}
            key={index}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
