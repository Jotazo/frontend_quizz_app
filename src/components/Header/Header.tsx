import { ThemeToggler } from "..";
import { HTMLIcon } from "../../assets/Icons";
import GameSelectedElement from "./GameSelectedElement";

interface Props {
  isGameSelected?: boolean;
}

const Header: React.FC<Props> = ({ isGameSelected }) => {
  return (
    <div className="flex items-center min-h-[56px]">
      {isGameSelected && <GameSelectedElement icon={<HTMLIcon />} />}
      <div className="ml-auto">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
