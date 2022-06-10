import React from "react";

export const Categories = () => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlerActiveIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((i, index) => (
          <li
            onClick={() => handlerActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
            key={index}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
