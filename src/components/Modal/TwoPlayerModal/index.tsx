import usePlaying from "../../../contexts/usePlaying";
import { Modal } from "../../index";

const TwoPlayerModal = () => {
  const { playerOneScore, playerTwoScore } = usePlaying();

  const winPlayer = playerOneScore > playerTwoScore ? "Player 1" : "Player 2";
  const losePlayer = winPlayer === "Player 1" ? "Player 2" : "Player 1";
  const winPlayerScore =
    winPlayer === "Player 1" ? playerOneScore : playerTwoScore;
  const losePlayerScore =
    winPlayer === "Player 1" ? playerTwoScore : playerOneScore;

  return (
    <Modal
      headerText={`${winPlayer} is the Winner!`}
      smallText='Game over! Here are the results...'
    >
      <div className='flex justify-between items-center w-full rounded-lg bg-orange-400 text-white p-4 my-3'>
        <span>{winPlayer} (winner!)</span>
        <span className='font-bold text-lg'>{winPlayerScore} pairs</span>
      </div>
      <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 text-black p-4 my-3'>
        <span>{losePlayer}</span>
        <span className='font-bold text-lg'>{losePlayerScore} pairs</span>
      </div>
    </Modal>
  );
};

export default TwoPlayerModal;
