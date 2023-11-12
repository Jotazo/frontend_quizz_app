import { AccessibilityIcon, CSSIcon, HTMLIcon, JSIcon } from "../assets/Icons";

interface Icons {
  [index: string]: React.JSX.Element;
}

export const QUIZZ_ICONS: Icons = {
  HTML: <HTMLIcon />,
  CSS: <CSSIcon />,
  JavaScript: <JSIcon />,
  Accessibility: <AccessibilityIcon />,
};
