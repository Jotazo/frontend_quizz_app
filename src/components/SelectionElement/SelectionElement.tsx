import { CorrectIcon, IncorrectIcon } from "../../assets/Icons";

import "./SelectionElement.css";

interface Props {
  letter: string;
  text: string;
  selected?: boolean;
  isCorrect?: boolean;
  submited?: boolean;
}

const SelectionElement: React.FC<Props> = ({
  letter,
  text,
  selected,
  isCorrect,
  submited,
}) => {
  const isIncorrect = submited && selected && !isCorrect;
  return (
    <div
      className={`flex gap-6 items-center cursor-pointer heading-s bg-white dark:bg-darkBlueLight border-[3px] border-solid border-transparent py-5 px-6 rounded-[2rem] duration-500 items-shadow selection-element ${
        selected && "selected"
      } ${isCorrect && "correct"} ${isIncorrect && "incorrect"}`}
    >
      <span className="bg-lightGrey p-4 px-5 rounded-lg text-custGrey transition duration-500">
        {letter}
      </span>
      <p className="flex-1 text-darkBlue dark:text-white">{text}</p>
      {isCorrect && <CorrectIcon />}
      {isIncorrect && <IncorrectIcon />}
    </div>
  );
};

export default SelectionElement;
