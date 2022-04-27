import { Fragment } from "react";
import { createPortal } from "react-dom";
import usePlaying from "../../contexts/usePlaying";
import { Backdrop, Button } from "../index";

const Modal = () => {
  const { restartGame, newGame } = usePlaying();
  return (
    <Fragment>
      <Backdrop />
      {createPortal(
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-6 text-center shadow-lg rounded-lg bg-slate-100 min-w-[350px] lg:min-w-[800px] '>
          <h2 className='text-3xl font-bold'>You Did It!</h2>
          <small className='font-thin text-slate-500'>
            Game over. Here is how you got on...
          </small>
          <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
            <span>Time taken</span>
            <span className='font-bold text-lg'>00:22</span>
          </div>
          <div className='flex justify-between items-center w-full rounded-lg bg-slate-400 p-4 my-3'>
            <span>Move taken</span>
            <span className='font-bold text-lg'>14</span>
          </div>
          <div className='flex justify-center items-center gap-2 lg:flex-row flex-col'>
            <Button
              onClick={restartGame}
              customStyle={"text-black w-32 lg:basis-52 grow-0 shrink-1"}
              type='button'
            >
              Restart
            </Button>
            <Button
              onClick={newGame}
              customStyle={"text-black w-32 lg:basis-52 grow-0 shrink-1"}
              type='button'
            >
              New game
            </Button>
          </div>
        </div>,
        document.getElementById("modal")!
      )}
    </Fragment>
  );
};

export default Modal;
