import { CorrectIcon, IncorrectIcon } from "../../assets/Icons";

import SelectionElementContainer from "./SelectionElementContainer";

import "./GameSelectionElement.css";

interface Props {
  letter?: string;
  text: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isSubmited?: boolean;
  icon?: React.JSX.Element;
}

const GameSelectionElement: React.FC<Props> = ({
  letter,
  text,
  isSelected,
  isCorrect,
  isSubmited,
}) => {
  const isIncorrect = isSubmited && isSelected && !isCorrect;
  return (
    <SelectionElementContainer
      customClasses={`game-selection-element ${isSelected && "selected"} ${isCorrect && "correct"} ${
        isIncorrect && "incorrect"
      }`}
    >
      <span className="bg-lightGrey p-4 px-5 rounded-lg text-custGrey transition duration-500">
        {letter}
      </span>
      <p className="flex-1 text-darkBlue dark:text-white">{text}</p>
      {isCorrect && <CorrectIcon />}
      {isIncorrect && <IncorrectIcon />}
    </SelectionElementContainer>
  );
};

export default GameSelectionElement;
