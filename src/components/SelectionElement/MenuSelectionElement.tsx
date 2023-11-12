import SelectionElementContainer from "./SelectionElementContainer";

interface Props {
  icon: React.JSX.Element;
  text: string;
}

const MenuSelectionElement: React.FC<Props> = ({ icon, text }) => {
  return (
    <SelectionElementContainer>
      {icon}
      <p className="flex-1 text-darkBlue dark:text-white">{text}</p>
    </SelectionElementContainer>
  );
};

export default MenuSelectionElement;
