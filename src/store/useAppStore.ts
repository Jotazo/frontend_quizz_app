import { create } from "zustand";

import { AppStore } from "../interfaces";

const initialState = {
  gameSelected: null,
  question: null,
  indexQuestion: 0,
  optionSelected: null,
  isQuestionSubmitted: false,
  gameFinished: false,
  hits: 0,
};

const useAppStore = create<AppStore>()((set, get) => ({
  ...initialState,
  setGameSelected: (quizz) => {
    const initialIndex = get().indexQuestion;
    const question = quizz.questions[initialIndex];
    set(() => ({ gameSelected: quizz, question }));
  },
  setOptionSelected: (optionSelected) => set(() => ({ optionSelected })),
  onAddNewQuestion: () => {
    const newIndexQuestion = get().indexQuestion + 1;
    const newQuestion = get().gameSelected?.questions[newIndexQuestion];
    set(() => ({
      question: newQuestion,
      indexQuestion: newIndexQuestion,
    }));
  },
  onSubmitQuestion: () => {
    const isSubmitted = get().isQuestionSubmitted;
    if (isSubmitted) {
      const isSuccessfullyAnswered =
        get().optionSelected === get().question?.answer;
      set((state) => ({
        optionSelected: null,
        isQuestionSubmitted: false,
        hits: isSuccessfullyAnswered ? state.hits + 1 : state.hits,
      }));
      const isLastQuestion =
        get().gameSelected?.questions.length === get().indexQuestion + 1;
      if (isLastQuestion) {
        return set(() => ({ gameFinished: true }));
      }
      get().onAddNewQuestion();
    } else {
      set(() => ({ isQuestionSubmitted: true }));
    }
  },
  onResetGame: () => set(() => initialState),
}));

export default useAppStore;
