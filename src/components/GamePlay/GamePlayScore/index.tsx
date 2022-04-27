import usePlaying from "../../../contexts/usePlaying";
import { SingleGamePlayScore, MultiGamePlayScore } from "../../index";

const GamePlayScore = () => {
  const { gameConfig } = usePlaying();
  const { numPlayer } = gameConfig;

  let content = <SingleGamePlayScore />;

  if (numPlayer === 2) {
    content = <MultiGamePlayScore />;
  }

  return content;
};

export default GamePlayScore;
