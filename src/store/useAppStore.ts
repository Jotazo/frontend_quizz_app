import { create } from "zustand";

import { AppStore } from "../interfaces";

import quizzes from "../data/data.json";

const useAppStore = create<AppStore>()((set) => ({
  quizzes,
  gameSelected: null,
  setGameSelected: (quizz) => set(() => ({ gameSelected: quizz })),
}));

export default useAppStore;
