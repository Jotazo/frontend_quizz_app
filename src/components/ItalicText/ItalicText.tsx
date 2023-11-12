import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ItalicText: React.FC<Props> = ({ children }) => {
  return (
    <p className="font-[RubikItalic] text-custGrey dark:text-lightBlue mt-2 sm:text-2xl lg:text-xl">
      {children}
    </p>
  );
};

export default ItalicText;
