import React from "react";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { selectSearchValue, setSearchValue } from "../../redux/slices/searchSlice";

export const Search: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);
  const input = React.useRef<HTMLInputElement>(null);

  const hanlderUpdateSearchValue = React.useCallback(
    debounce((e: string) => {
      dispatch(setSearchValue(e));
    }, 250),
    [searchValue],
  );

  const handlerChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    hanlderUpdateSearchValue(e.target.value);
  };

  const handlerClearInput = () => {
    setInputValue("");
    dispatch(setSearchValue(""));

    input.current?.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={input}
        value={inputValue}
        onChange={(e) => {
          handlerChangeInput(e);
        }}
        type="text"
        placeholder="Поиск пицц"
      />
      {searchValue && (
        <svg
          onClick={handlerClearInput}
          className={styles.closeIcon}
          version="1.1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <g id="grid_system" />
          <g id="_icons">
            <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
          </g>
        </svg>
      )}
    </div>
  );
};
export default Search;