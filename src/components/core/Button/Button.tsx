import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { ButtonTypes, ButtonVariants } from "./constants";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonTypes;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        "font-bold py-2 px-4 rounded flex flex-row items-center disabled:cursor-not-allowed disabled:opacity-50",
        props.variant && ButtonVariants[props.variant]
      )}
      onClick={props.onClick}
    >
      {props.icon ? <span className="me-1">{props.icon}</span> : null}
      {props.children}
    </button>
  );
};
