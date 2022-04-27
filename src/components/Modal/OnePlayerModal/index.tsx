import usePlaying from "../../../contexts/usePlaying";
import { Modal } from "../../index";

const OnePlayerModal = () => {
  const { playerOneTimeTaken, playerOneMoveTaken } = usePlaying();
  const { minute, second } = playerOneTimeTaken;
  const displayMinute = minute < 10 ? `0${minute}` : minute;
  const displaySecond = second < 10 ? `0${second}` : second;
  const displayTime = `${displayMinute}:${displaySecond}`;

  return (
    <Modal
      headerText='You Did It!'
      smallText='Game over. Here is how you got on...'
    >
      <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
        <span>Time taken</span>
        <span className='font-bold text-lg'>{displayTime}</span>
      </div>
      <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
        <span>Move taken</span>
        <span className='font-bold text-lg'>{playerOneMoveTaken}</span>
      </div>
    </Modal>
  );
};

export default OnePlayerModal;
