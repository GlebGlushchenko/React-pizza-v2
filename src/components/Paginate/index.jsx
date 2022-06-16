import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

import styles from "./Paginate.module.scss";

export const Paginate = () => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => {
        dispatch(setPageCount(e.selected));
      }}
      pageRangeDisplayed={8}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
