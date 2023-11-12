import { HTMLProps } from "react";

import {
  CorrectIcon,
  IconPlaceholder,
  IncorrectIcon,
} from "../../assets/Icons";

import AnimatedSelectionElementContainer from "./AnimatedSelectionElemenContainer";

import "./GameSelectionElement.css";

interface Props extends HTMLProps<HTMLDivElement> {
  letter?: string;
  text: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isSubmited?: boolean;
  index: number;
}

const GameSelectionElement: React.FC<Props> = ({
  letter,
  text,
  isSelected,
  isCorrect,
  isSubmited,
  index,
  ...props
}) => {
  const isIncorrectSubmited = isSubmited && isSelected && !isCorrect;
  const isCorrectSubmited =
    (isSubmited && isCorrect) || (isSubmited && isSelected && isCorrect);

  const styleSelected = isSelected ? "selected" : "";
  const styleCorrect = isCorrectSubmited ? "correct" : "";
  const styleIncorrect = isIncorrectSubmited ? "incorrect" : "";
  const styleDisabled = isSubmited ? "pointer-events-none" : "";

  return (
    <AnimatedSelectionElementContainer
      index={index}
      customClasses={`game-selection-element ${styleSelected} ${styleCorrect} ${styleIncorrect} ${styleDisabled}`}
      {...props}
    >
      <span className="bg-lightGrey p-3 px-4 sm:px-5 lg:px-4 lg:py-2 rounded-lg text-custGrey transition duration-500">
        {letter}
      </span>
      <p className="flex-1 text-darkBlue dark:text-white lg:text-lg">{text}</p>
      {!isCorrectSubmited && !isIncorrectSubmited && <IconPlaceholder />}
      {isCorrectSubmited && <CorrectIcon />}
      {isIncorrectSubmited && <IncorrectIcon />}
    </AnimatedSelectionElementContainer>
  );
};

export default GameSelectionElement;
