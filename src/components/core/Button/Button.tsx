import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Variants } from "./constants";

interface Props {
  variant: "primary" | "secondary";
  onClick: () => void;
}

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <button
      className={clsx(
        "font-bold py-2 px-4 rounded",
        props.variant && Variants[props.variant]
      )}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
