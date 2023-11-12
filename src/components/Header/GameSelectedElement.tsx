import { QUIZZ_ICONS } from "../../utils/quizzIcons";

interface Props {
  quizzTitle: string;
}

const GameSelectedElement: React.FC<Props> = ({ quizzTitle }) => {
  return (
    <div className="heading-s flex items-center !text-[16px] sm:!text-2xl gap-4 transition duration-500">
      {QUIZZ_ICONS[quizzTitle]}
      <p className="flex-1 text-darkBlue dark:text-white">{quizzTitle}</p>
    </div>
  );
};

export default GameSelectedElement;
