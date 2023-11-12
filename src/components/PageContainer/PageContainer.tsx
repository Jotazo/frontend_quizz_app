import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return <div className="mt-14">{children}</div>;
};

export default PageContainer;
