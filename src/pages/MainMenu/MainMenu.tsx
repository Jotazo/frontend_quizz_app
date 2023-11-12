import {
  ItalicText,
  MenuSelectionElement,
  PageContainer,
} from "../../components";

import quizzes from "../../data/data.json";

const MainMenu = () => {
  return (
    <PageContainer>
      <section className="mb-10 sm:mb-14">
        <h1 className="sm:max-w-[75%] lg:max-w-none lg:w-[520px] text-[40px] sm:text-7xl lg:text-6xl leading-tight text-darkBlue dark:text-white lg:mb-10">
          Welcome to the{" "}
          <span className="font-[RubikMedium] ">Frontend Quiz!</span>
        </h1>
        <ItalicText>Pick a subject to get started.</ItalicText>
      </section>
      <ul className="flex flex-col gap-4 flex-1">
        {quizzes.map((quizz) => (
          <MenuSelectionElement key={quizz.title} quizz={quizz} />
        ))}
      </ul>
    </PageContainer>
  );
};

export default MainMenu;
