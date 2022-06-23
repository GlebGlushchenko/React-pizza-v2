import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

export const Categories = () => {
  const { categories, categoryesId } = useSelector((state) => state.filter);
  console.log(categoryesId);
  const dispatch = useDispatch();
  const handlerSelectCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => handlerSelectCategory(index)}
            className={categoryesId === index ? "active" : ""}
            key={index}>
            {item}
            {console.log(index)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
