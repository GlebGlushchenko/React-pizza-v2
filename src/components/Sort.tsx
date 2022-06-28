import React from "react";
import { useDispatch } from "react-redux";
import { CategoriesType, setSortType } from "../redux/slices/filterSlice";

type Props = {
  sortType: {
    name: string;
    sortProperty: string;
  };
  listCategories: {
    name: string;
    sortProperty: string;
  }[];
};

export const Sort: React.FC<Props> = ({ sortType, listCategories }) => {
  const dispatch = useDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);
  const [showPopUp, setShowPopUp] = React.useState<boolean>(false); //Show Pop Up

  const handlerSortType = (obj: CategoriesType) => {
    dispatch(setSortType(obj));
    setShowPopUp(false);
  };
  React.useEffect(() => {
    const handlerOutsideClick = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
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
