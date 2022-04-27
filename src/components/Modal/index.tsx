import { Fragment } from "react";
import { createPortal } from "react-dom";
import usePlaying from "../../contexts/usePlaying";
import { Backdrop, Button } from "../index";

interface Props {
  headerText: string;
  smallText: string;
  children: React.ReactElement[] | React.ReactElement;
}

const Modal = ({ children, headerText, smallText }: Props) => {
  const playing = usePlaying();
  const { newGame, restartGame } = playing;
  return (
    <Fragment>
      <Backdrop />
      {createPortal(
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-6 text-center shadow-lg rounded-lg bg-slate-100 min-w-[350px] lg:min-w-[800px] '>
          <h2 className='text-3xl font-bold'>{headerText}</h2>
          <small className='font-thin text-slate-500'>{smallText}</small>
          {children}
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
