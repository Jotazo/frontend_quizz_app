import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className="mt-4 sm:mt-10">{children}</div>;
};

export default PageContainer;
