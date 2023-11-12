import useAppStore from "../../../store/useAppStore";

import {
  Button,
  GameSelectionElement,
  ItalicText,
  PageContainer,
} from "../../../components";

const LETTERS = ["A", "B", "C", "D"];

const InGame = () => {
  const question = useAppStore((state) => state.question);
  const gameSelected = useAppStore((state) => state.gameSelected);
  const optionSelected = useAppStore((state) => state.optionSelected);
  const indexQuestion = useAppStore((state) => state.indexQuestion);
  const isQuestionSubmitted = useAppStore((state) => state.isQuestionSubmitted);

  const setOptionSelected = useAppStore((state) => state.setOptionSelected);
  const onSubmitQuestion = useAppStore((state) => state.onSubmitQuestion);

  const buttonText = isQuestionSubmitted ? "Next Question" : "Submit Answer";

  return (
    <PageContainer>
      <section className="flex flex-col gap-4 sm:gap-6 mb-8">
        <ItalicText>
          Question {indexQuestion + 1} of {gameSelected?.questions.length}
        </ItalicText>
        <p className="text-[22px] sm:text-4xl text-darkBlue font-semibold dark:text-white">
          {question?.question}
        </p>
        <div className="w-100 bg-white dark:bg-darkBlueLight h-4 sm:h-6 rounded-full p-[4px]">
          <div className="w-100 bg-custPurple h-2 sm:h-4 rounded-full"></div>
        </div>
      </section>
      <ul className="flex flex-col gap-4 mb-6">
        {question?.options.map((option, index) => (
          <GameSelectionElement
            key={option}
            isCorrect={option === question.answer}
            isSubmited={isQuestionSubmitted}
            isSelected={optionSelected === option}
            text={option}
            letter={LETTERS[index]}
            onClick={() => setOptionSelected(option)}
          />
        ))}
      </ul>
      <Button disabled={!optionSelected} text={buttonText} onClick={() => onSubmitQuestion()} />
    </PageContainer>
  );
};

export default InGame;
