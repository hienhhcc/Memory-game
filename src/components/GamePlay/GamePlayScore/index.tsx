import { Fragment } from "react";
import usePlaying from "../../../contexts/usePlaying";
import { MoveScore, TimeScore } from "../../index";

const GamePlayScore = () => {
  const { gameConfig } = usePlaying();
  const { numPlayer } = gameConfig;

  let content = (
    <Fragment>
      <TimeScore />
      <MoveScore />
    </Fragment>
  );

  return (
    <div className='flex justify-center items-center gap-4 mx-auto my-4'>
      {content}
    </div>
  );
};

export default GamePlayScore;
