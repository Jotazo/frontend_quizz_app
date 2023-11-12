import useAppStore from "../../store/useAppStore";

import { ThemeToggler } from "..";

import GameSelectedElement from "./GameSelectedElement";

const Header = () => {
  const gameSelected = useAppStore((state) => state.gameSelected);

  return (
    <div className="flex items-center min-h-[56px]">
      {gameSelected && <GameSelectedElement quizzTitle={gameSelected.title} />}
      <div className="ml-auto">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
