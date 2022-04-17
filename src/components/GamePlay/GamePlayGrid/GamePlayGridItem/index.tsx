import { ReactChild } from 'react';

interface Props {
  children: ReactChild;
}

const GamePlayGridItem = ({ children }: Props) => {
  return (
    <button className="w-14 h-14 rounded-full bg-slate-700 text-slate-700 outline-none">
      {children}
    </button>
  );
};

export default GamePlayGridItem;
