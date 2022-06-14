import React from "react";

export const Categories = ({ selectedCategories, setSelectedCategories }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((i, index) => (
          <li
            onClick={() => setSelectedCategories(index)}
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
