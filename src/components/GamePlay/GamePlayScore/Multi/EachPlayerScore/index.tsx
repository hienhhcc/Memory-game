interface Props {
  player: string;
  scoreCount: number;
  thisTurn: boolean;
}

const EachPlayerScore = ({ scoreCount, player, thisTurn }: Props) => {
  return (
    <div
      className={`rounded-lg p-4 min-w-[9rem] md:min-w-[12rem] ${
        thisTurn ? "bg-orange-400" : "bg-slate-400"
      }`}
    >
      <h3 className='text-sm'>{player}</h3>
      <div className='text-xl text-bold'>{scoreCount}</div>
    </div>
  );
};

export default EachPlayerScore;
