import { MouseEventHandler, ReactNode } from "react";
import "./ButtonGroup.css"

type TButton = {
  children: ReactNode;
  labelText?: string;
  className?: string;
  onClick?: MouseEventHandler;
};

// Переименовать компонент
export const Button: React.FC<TButton> = ({
  children,
  labelText = "",
  className = "", // Обратить внимание на 21 строку *конкатинация*
  onClick = () => {},
}) => {
  return (
    <div className={"button-container"}>
      <label htmlFor={className}>{labelText}</label>
      <button className={className + " btn"} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
