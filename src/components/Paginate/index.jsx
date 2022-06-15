import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Paginate.module.scss";

export const Paginate = ({ pageCount, setActivePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => {
        setActivePage(e.selected + 1);
      }}
      pageRangeDisplayed={8}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
