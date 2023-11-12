import useAppStore from "../../store/useAppStore";

import { Quizz } from "../../interfaces";

import {
  AccessibilityIcon,
  CSSIcon,
  HTMLIcon,
  JSIcon,
} from "../../assets/Icons";

import SelectionElementContainer from "./SelectionElementContainer";

interface Props {
  quizz: Quizz;
}

interface Icons {
  [index: string]: React.JSX.Element;
}

const ICONS: Icons = {
  HTML: <HTMLIcon />,
  CSS: <CSSIcon />,
  JavaScript: <JSIcon />,
  Accessibility: <AccessibilityIcon />,
};

const MenuSelectionElement: React.FC<Props> = ({ quizz }) => {
  const setGameSelected = useAppStore((state) => state.setGameSelected);

  return (
    <SelectionElementContainer onClick={() => setGameSelected(quizz)}>
      {ICONS[quizz.title]}
      <p className="flex-1 text-darkBlue dark:text-white">{quizz.title}</p>
    </SelectionElementContainer>
  );
};

export default MenuSelectionElement;
