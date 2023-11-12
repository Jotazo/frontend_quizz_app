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
  quizzes: Quizz[];
  gameSelected: null | Quizz;
  setGameSelected: (quizz: Quizz) => void;
}
