import { MouseEventHandler } from "react";

type TButton = {
  labelText: string;
  children: string;
  className: string;
  onClick: MouseEventHandler;
};

export const Button: React.FC<TButton> = ({
  labelText,
  children,
  className,
  onClick,
}) => {
  return (
    <div className={className + "-content"}>
      <label htmlFor={className}>{labelText}</label>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
