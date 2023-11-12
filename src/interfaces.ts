export interface Quizz {
  title: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface AppStore {
  gameSelected: null | Quizz;
  question: null | Question;
  indexQuestion: number;
  optionSelected: null | string;
  isQuestionSubmitted: boolean;
  hits: number;
  setGameSelected: (quizz: Quizz) => void;
  setOptionSelected: (optionSelected: string) => void;
  onSubmitQuestion: () => void;
}
