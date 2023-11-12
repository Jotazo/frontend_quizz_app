import useAppStore from "../../store/useAppStore";

import { Quizz } from "../../interfaces";

import { QUIZZ_ICONS } from "../../utils/quizzIcons";

import SelectionElementContainer from "./SelectionElementContainer";

interface Props {
  quizz: Quizz;
}

const MenuSelectionElement: React.FC<Props> = ({ quizz }) => {
  const setGameSelected = useAppStore((state) => state.setGameSelected);

  return (
    <SelectionElementContainer onClick={() => setGameSelected(quizz)}>
      {QUIZZ_ICONS[quizz.title]}
      <p className="flex-1 text-darkBlue dark:text-white">{quizz.title}</p>
    </SelectionElementContainer>
  );
};

export default MenuSelectionElement;
