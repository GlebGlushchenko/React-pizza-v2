import React from "react";

import styles from "./notFoundInfo.module.scss";

export const NotFoundInfo:React.FC = () => {
  return (
    <div className={styles.title}>
      <h1>Нечего не найдено 😕</h1>
      <div className={styles.description}>К сожелению такой страницы нет</div>
    </div>
  );
};

export default NotFoundInfo;
