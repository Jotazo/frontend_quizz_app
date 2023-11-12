import useAppStore from "../../../store/useAppStore";

import { QUIZZ_ICONS } from "../../../utils/quizzIcons";

import { Button, PageContainer } from "../../../components";

const Results = () => {
  const gameSelected = useAppStore((state) => state.gameSelected);
  const hits = useAppStore((state) => state.hits);
  const onResetGame = useAppStore((state) => state.onResetGame);

  return (
    <PageContainer>
      {" "}
      <h1 className="sm:max-w-[85%] text-[40px] sm:text-7xl leading-tight text-darkBlue dark:text-white">
        Quiz completed{" "}
        <span className="font-[RubikMedium] font-bold">You scored...</span>
      </h1>
      <section className="flex flex-col items-center bg-white dark:bg-darkBlueLight sm:gap-10 py-6 sm:py-12 mt-8 sm:mt-14 mb-4 sm:mb-8 rounded-xl sm:rounded-3xl">
        <div className="heading-s flex items-center !text-[16px] sm:!text-2xl gap-4 transition duration-500">
          {QUIZZ_ICONS[gameSelected!.title]}
          <p className="flex-1 text-darkBlue dark:text-white">
            {gameSelected!.title}
          </p>
        </div>
        <h2 className="text-[88px] sm:text-9xl font-bold text-darkBlue dark:text-white">
          {hits}
        </h2>
        <p className="text-custGrey dark:text-lightBlue sm:text-2xl">
          out of {gameSelected?.questions.length}
        </p>
      </section>
      <Button text="Play Again" onClick={onResetGame} />
    </PageContainer>
  );
};

export default Results;
