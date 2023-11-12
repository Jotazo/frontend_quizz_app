import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mt-4 sm:mt-10 lg:flex"
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;
