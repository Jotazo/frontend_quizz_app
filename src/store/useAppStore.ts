import { create } from "zustand";

import { AppStore } from "../interfaces";

const useAppStore = create<AppStore>()((set, get) => ({
  gameSelected: null,
  question: null,
  indexQuestion: 0,
  optionSelected: null,
  isQuestionSubmitted: false,
  hits: 0,
  setGameSelected: (quizz) => {
    const initialIndex = get().indexQuestion;
    const question = quizz.questions[initialIndex];
    set(() => ({ gameSelected: quizz, question }));
  },
  setOptionSelected: (optionSelected) => set(() => ({ optionSelected })),
  onSubmitQuestion: () => {
    const isSubmitted = get().isQuestionSubmitted;
    if (isSubmitted) {
      const newIndexQuestion = get().indexQuestion + 1;
      const newQuestion = get().gameSelected?.questions[newIndexQuestion];
      set(() => ({
        question: newQuestion,
        indexQuestion: newIndexQuestion,
        optionSelected: null,
        isQuestionSubmitted: false,
      }));
    } else {
      set(() => ({ isQuestionSubmitted: true }));
    }
  },
}));

export default useAppStore;
