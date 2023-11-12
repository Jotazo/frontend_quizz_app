import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  customClasses?: string;
}

const SelectionElementContainer: React.FC<Props> = ({
  children,
  customClasses = "",
}) => {
  return (
    <div
      className={`flex gap-6 items-center cursor-pointer heading-s bg-white dark:bg-darkBlueLight py-5 px-6 border-[3px] border-transparent rounded-[2rem] duration-500 items-shadow ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default SelectionElementContainer;
