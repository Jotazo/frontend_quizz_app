import { Header } from "./components";

import useAppStore from "./store/useAppStore";

import { MainMenu, GameScreen } from "./pages";

import "./App.css";

const App = () => {
  const gameSelected = useAppStore((state) => state.gameSelected);
  return (
    <div className="w-full max-w-6xl mx-auto px-6 pt-5 sm:px-9 sm:pt-8 transition-all duration-500">
      <Header />
      {gameSelected ? <GameScreen /> : <MainMenu />}
    </div>
  );
};

export default App;
