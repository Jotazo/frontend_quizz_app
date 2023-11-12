import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  customClasses?: string;
}

const SelectionElementContainer: React.FC<Props> = ({
  children,
  customClasses = "",
  ...props
}) => {
  return (
    <div
      className={`flex gap-3 sm:gap-6 items-center cursor-pointer heading-s !text-[16px] sm:!text-2xl bg-white dark:bg-darkBlueLight py-3 px-3 sm:py-5 sm:px-6 border-[3px] border-transparent rounded-2xl duration-500 items-shadow ${customClasses}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SelectionElementContainer;
