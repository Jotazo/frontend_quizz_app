import useAppStore from "../../store/useAppStore";
import InGame from "./InGame/InGame";
import Results from "./Results/Results";

const GameScreen = () => {
  const gameFinished = useAppStore((state) => state.gameFinished);

  return <div>{!gameFinished ? <InGame /> : <Results />}</div>;
};

export default GameScreen;
