import { HTMLProps } from "react";
import { CorrectIcon, IncorrectIcon } from "../../assets/Icons";

import SelectionElementContainer from "./SelectionElementContainer";

import "./GameSelectionElement.css";

interface Props extends HTMLProps<HTMLDivElement> {
  letter?: string;
  text: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isSubmited?: boolean;
}

const GameSelectionElement: React.FC<Props> = ({
  letter,
  text,
  isSelected,
  isCorrect,
  isSubmited,
  ...props
}) => {
  const isIncorrect = isSubmited && isSelected && !isCorrect;
  return (
    <SelectionElementContainer
      customClasses={`game-selection-element ${isSelected && "selected"} ${
        isCorrect && "correct"
      } ${isIncorrect && "incorrect"}`}
      {...props}
    >
      <span className="bg-lightGrey p-3 px-4 sm:p-4 sm:px-6 rounded-lg text-custGrey transition duration-500">
        {letter}
      </span>
      <p className="flex-1 text-darkBlue dark:text-white">{text}</p>
      {isCorrect && <CorrectIcon />}
      {isIncorrect && <IncorrectIcon />}
    </SelectionElementContainer>
  );
};

export default GameSelectionElement;
