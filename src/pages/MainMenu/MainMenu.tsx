import useAppStore from "../../store/useAppStore";

import { MenuSelectionElement } from "../../components";

const MainMenu = () => {
  const quizzes = useAppStore((state) => state.quizzes);

  return (
    <div className="mt-14">
      <section className="mb-10 sm:mb-14">
        <h1 className="sm:max-w-[75%] text-[40px] sm:text-7xl leading-tight text-darkBlue dark:text-white">
          Welcome to the{" "}
          <span className="font-[RubikMedium] ">Frontend Quiz!</span>
        </h1>
        <p className="font-[RubikItalic] text-custGrey dark:text-lightBlue mt-2 sm:text-2xl">
          Pick a subject to get started.
        </p>
      </section>
      <ul className="flex flex-col gap-4">
        {quizzes.map((quizz) => (
          <MenuSelectionElement key={quizz.title} quizz={quizz} />
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
