import { motion, AnimatePresence } from "framer-motion";

import { QUIZZ_ICONS } from "../../utils/quizzIcons";

interface Props {
  quizzTitle: string;
}

const GameSelectedElement: React.FC<Props> = ({ quizzTitle }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quizzTitle}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: -550, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="heading-s flex items-center !text-[16px] sm:!text-2xl gap-4 transition duration-500"
      >
        {QUIZZ_ICONS[quizzTitle]}
        <p className="flex-1 text-darkBlue dark:text-white">{quizzTitle}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameSelectedElement;
