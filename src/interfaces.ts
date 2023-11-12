export interface Quizzes {
  quizzes: Quizz[];
}

export interface Quizz {
  title: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}
