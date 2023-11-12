import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <button
      className="bg-custPurple hover:bg-custLightPurple disabled:bg-lightBlue transition text-white font-semibold p-4 sm:p-8 rounded-3xl w-full text-[RubikMediumtext] text-lg sm:text-3xl items-shadow"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
