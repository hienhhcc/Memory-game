import { MouseEventHandler, ReactChild } from 'react';
import usePlaying from '../../../../contexts/usePlaying';
import { ETileState } from '../../../../enums';

interface Props {
  children: ReactChild;
  buttonIndex: number;
}

const GamePlayGridItem = ({ children, buttonIndex }: Props) => {
  const { buttonOpenStates, openTile } = usePlaying();

  const onClickButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    openTile(buttonIndex, children);
  };

  return (
    <button
      onClick={onClickButtonHandler}
      className={`w-14 h-14 rounded-full outline-none ${
        buttonOpenStates[buttonIndex] === ETileState.OPEN
          ? 'bg-orange-500 text-white'
          : buttonOpenStates[buttonIndex] === ETileState.DONE
          ? 'bg-slate-400 text-white'
          : 'bg-slate-700 text-slate-700'
      }`}
    >
      {children}
    </button>
  );
};

export default GamePlayGridItem;
