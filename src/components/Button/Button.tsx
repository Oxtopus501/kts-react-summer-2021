import React from "react";
import "./Button.css";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
