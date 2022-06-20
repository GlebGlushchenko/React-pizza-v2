import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../redux/slices/filterSlice";

export const listCategories = [
  { name: "популярности⬇", sortProperty: "rating" },
  { name: "популярности⬆", sortProperty: "-rating" },
  { name: "цене⬇", sortProperty: "price" },
  { name: "цене⬆", sortProperty: "-price" },
  { name: "алфавиту⬇", sortProperty: "title" },
  { name: "алфавиту⬆", sortProperty: "-title" },
];

export const Sort = ({ sortType }) => {
  const dispatch = useDispatch();

  const sortRef = React.useRef();
  const [showPopUp, setShowPopUp] = React.useState(false); //Show Pop Up

  const sortLabel = sortType.sortProperty.includes("-");

  const handlerSortType = (obj) => {
    dispatch(setSortType(obj));
    setShowPopUp(false);
  };
  React.useEffect(() => {
    const handlerOutsideClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setShowPopUp(false);
      }
    };

    document.body.addEventListener("click", handlerOutsideClick);
    return () => {
      document.body.removeEventListener("click", handlerOutsideClick);
    };
  }, []);

  return (
    <div onClick={() => setShowPopUp(!showPopUp)} ref={sortRef} className="sort">
      <div className="sort__label">
        {sortLabel ? "⬆" : "⬇"}
        <b>Сортировка по:</b>
        <span>{sortType.name}</span>
      </div>
      {showPopUp && (
        <div className="sort__popup">
          <ul>
            {listCategories.map((obj, index) => (
              <li
                className={sortType.name === obj.name ? "active" : ""}
                onClick={() => handlerSortType(obj)}
                key={index}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
