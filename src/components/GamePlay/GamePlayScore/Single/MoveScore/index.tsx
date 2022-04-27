import usePlaying from "../../../../../contexts/usePlaying";
import Score from "../Score";

const MoveScore = () => {
  const { playerOneMoveTaken } = usePlaying();

  return <Score title='Move' value={playerOneMoveTaken} />;
};

export default MoveScore;
