import React from "react";
import "./Button.css";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  disabled: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);
