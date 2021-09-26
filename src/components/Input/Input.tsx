import React from "react";

import styles from "./input.module.scss";

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) => {
  return (
    <input
      className={`${styles.input}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
