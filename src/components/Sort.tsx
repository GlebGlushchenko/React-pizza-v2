import React from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../redux/slices/filterSlice";

export type CategoriesType ={ 
  name:string;
  sortProperty:string;
}

type Props = { 
  sortType:{
    name:string;
    sortProperty:string
  }
 
}

export const listCategories:CategoriesType[] = [
  { name: "популярности", sortProperty: "rating" },
  { name: " ценапо возрастанию", sortProperty: "-price" },
  { name: "цена по убыванию", sortProperty: "price" },
];

export const Sort:React.FC<Props> =({ sortType }) => {
  const dispatch = useDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);
  const [showPopUp, setShowPopUp] = React.useState<boolean>(false); //Show Pop Up

  const handlerSortType = (obj:CategoriesType) => {
    dispatch(setSortType(obj));
    setShowPopUp(false);
  };
  React.useEffect(() => {
    const handlerOutsideClick = (event:any) => {
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
