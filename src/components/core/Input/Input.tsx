import { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  innerRef?: React.Ref<HTMLInputElement>;
}

export const Input: FC<Props> = (props) => {
  return (
    <input
      {...props}
      ref={props.innerRef}
      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      placeholder={props.placeholder}
    />
  );
};
