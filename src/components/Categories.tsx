import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

export const Categories = () => {
  const { categories, categoryesId } = useSelector((state:any) => state.filter);
  const dispatch = useDispatch();
  const handlerSelectCategory = (index:number) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item:string, index:number) => (
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
};

export default Categories;
