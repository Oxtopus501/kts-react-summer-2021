import React from "react";

import styles from "./no-results.module.scss";

const NoResults: React.FC = () => {
  return (
    <div className={`${styles["no-results"]}`}>
      <p className={`${styles["no-results__smiley"]}`}>¯\_(ツ)_/¯</p>
      <p className={`${styles["no-results__text"]}`}>Ничего не найдено</p>
    </div>
  );
};

export default React.memo(NoResults);
