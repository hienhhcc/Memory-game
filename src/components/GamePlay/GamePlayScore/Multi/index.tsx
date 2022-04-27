import { useMemo } from "react";
import usePlaying from "../../../../contexts/usePlaying";
import { EPlayerTurn } from "../../../../enums";
import EachPlayerScore from "./EachPlayerScore";

const MultiGamePlayScore = () => {
  const { playerOneMoveTaken, playerTwoMoveTaken, turn } = usePlaying();

  const players = useMemo(() => {
    return [
      {
        player: "Player 1",
        moveCount: playerOneMoveTaken,
        turn: EPlayerTurn.ONE,
      },
      {
        player: "Player 2",
        moveCount: playerTwoMoveTaken,
        turn: EPlayerTurn.TWO,
      },
    ];
  }, [playerOneMoveTaken, playerTwoMoveTaken]);

  return (
    <div className='flex justify-center items-center gap-4 mx-auto my-4'>
      {players.map((playerScore) => (
        <EachPlayerScore
          player={playerScore.player}
          moveCount={playerScore.moveCount}
          thisTurn={playerScore.turn === turn}
          key={playerScore.player}
        />
      ))}
    </div>
  );
};

export default MultiGamePlayScore;
