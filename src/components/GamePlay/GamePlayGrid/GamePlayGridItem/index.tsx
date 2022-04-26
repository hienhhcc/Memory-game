import { MouseEventHandler, ReactChild } from "react";
import usePlaying from "../../../../contexts/usePlaying";
import { ETileState } from "../../../../enums";

interface Props {
  children: ReactChild;
  buttonIndex: number;
}

const GamePlayGridItem = ({ children, buttonIndex }: Props) => {
  const { buttonOpenStates, openTile, firstOpenTile, secondOpenTile } =
    usePlaying();

  const onClickButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    openTile(buttonIndex, children);
  };

  return (
    <button
      onClick={onClickButtonHandler}
      disabled={
        (firstOpenTile.value && secondOpenTile.value) ||
        buttonOpenStates[buttonIndex] === ETileState.DONE
      }
      className={`w-14 h-14 rounded-full outline-none ${
        buttonOpenStates[buttonIndex] === ETileState.OPEN
          ? "bg-orange-500 text-white text-base"
          : buttonOpenStates[buttonIndex] === ETileState.DONE
          ? "bg-slate-400 text-white  text-base"
          : "bg-slate-700 text-slate-700 text-[0px]"
      }`}
    >
      {children}
    </button>
  );
};

export default GamePlayGridItem;
