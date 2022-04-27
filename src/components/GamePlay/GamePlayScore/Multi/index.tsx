import { useMemo } from "react";
import usePlaying from "../../../../contexts/usePlaying";
import { EPlayerTurn } from "../../../../enums";
import EachPlayerScore from "./EachPlayerScore";

const MultiGamePlayScore = () => {
  const { playerOneScore, playerTwoScore, turn } = usePlaying();

  const players = useMemo(() => {
    return [
      {
        player: "Player 1",
        scoreCount: playerOneScore,
        turn: EPlayerTurn.ONE,
      },
      {
        player: "Player 2",
        scoreCount: playerTwoScore,
        turn: EPlayerTurn.TWO,
      },
    ];
  }, [playerOneScore, playerTwoScore]);

  return (
    <div className='flex justify-center items-center gap-4 mx-auto my-4'>
      {players.map((playerScore) => (
        <EachPlayerScore
          player={playerScore.player}
          scoreCount={playerScore.scoreCount}
          thisTurn={playerScore.turn === turn}
          key={playerScore.player}
        />
      ))}
    </div>
  );
};

export default MultiGamePlayScore;
