import { Modal } from "../../index";

const TwoPlayerModal = () => {
  return (
    <Modal
      headerText='You Did It!'
      smallText='Game over. Here is how you got on...'
    >
      <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
        <span>Time taken</span>
        <span className='font-bold text-lg'>00:22</span>
      </div>
      <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
        <span>Move taken</span>
        <span className='font-bold text-lg'>14</span>
      </div>
    </Modal>
  );
};

export default TwoPlayerModal;
