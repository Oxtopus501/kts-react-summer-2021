import React from "react";

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

const Input: React.FC<InputProps> = ({ onChange, placeholder, value }) => {
  return (
    <input
      className="search-form__input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
