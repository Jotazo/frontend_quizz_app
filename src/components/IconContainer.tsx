import React from "react";

interface Props {
  children: React.JSX.Element;
  customBg: string;
}

const IconContainer: React.FC<Props> = ({ children, customBg }) => {
  return (
    <div className={`p-2 w-fit rounded-lg ${customBg}`}>
      {children}
    </div>
  );
};

export default IconContainer;
