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
      <section className="flex flex-col gap-4 sm:gap-10 mb-8 sm:mb-10 lg:w-[520px]">
        <ItalicText>
          Question {indexQuestion + 1} of {gameSelected?.questions.length}
        </ItalicText>
        <p className="text-[22px] sm:text-4xl lg:text-2xl text-darkBlue font-semibold dark:text-white lg:w-[420px]">
          {question?.question}
        </p>
        {/* <div className="w-100 lg:w-[420px] bg-white dark:bg-darkBlueLight h-4 rounded-full p-[4px] lg:mt-auto lg:mb-8">
          <div className="w-100 bg-custPurple h-2 rounded-full"></div>
        </div> */}
      </section>
      <section className=" flex-1">
        <ul className="flex flex-col gap-4 mb-6 sm:gap-6 sm:mb-8 lg:mb-6 lg:flex-1">
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
        <Button
          disabled={!optionSelected}
          text={buttonText}
          onClick={() => onSubmitQuestion()}
        />
      </section>
    </PageContainer>
  );
};

export default InGame;
