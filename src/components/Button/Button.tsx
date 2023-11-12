import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  noHover?: boolean;
}

const Button: React.FC<Props> = ({ text, noHover = false, ...props }) => {
  return (
    <button
      className={`bg-custPurple ${
        !noHover && "hover:bg-custLightPurple"
      } disabled:bg-lightBlue transition text-white font-semibold p-4 sm:p-8 lg:p-5 rounded-xl sm:rounded-3xl lg:rounded-2xl w-full text-[RubikMediumtext] text-lg sm:text-[28px] lg:text-xl items-shadow`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
