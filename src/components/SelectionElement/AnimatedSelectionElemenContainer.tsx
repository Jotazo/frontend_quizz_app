import { HTMLProps, ReactNode } from "react";
import { motion } from "framer-motion";

import SelectionElementContainer from "./SelectionElementContainer";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  customClasses?: string;
  index: number;
}

const AnimatedSelectionElementContainer: React.FC<Props> = ({
  children,
  index,
  customClasses = "",
  ...props
}) => {
  const delay = (index + 1) * 0.2;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <SelectionElementContainer customClasses={customClasses} {...props}>
        {children}
      </SelectionElementContainer>
    </motion.div>
  );
};

export default AnimatedSelectionElementContainer;
