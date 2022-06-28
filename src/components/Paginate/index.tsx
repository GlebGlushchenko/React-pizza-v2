import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

import styles from "./Paginate.module.scss";

export const Paginate: React.FC = () => {
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
    />
  );
};

export default Paginate;
