import React from "react";

interface Props {
  children: React.JSX.Element;
  bgColor: string;
}

const IconContainer: React.FC<Props> = ({ children, bgColor }) => {
  return <div className={`bg-[${bgColor}] p-2 w-fit rounded-lg`}>{children}</div>;
};

export default IconContainer;
