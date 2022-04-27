interface Props {
  title: string;
  value: any;
}

const Score = ({ title, value }: Props) => {
  return (
    <div className='flex flex-auto flex-col md:flex-row max-w-xs justify-evenly items-center text-center gap-4 py-3 rounded-2xl bg-slate-400'>
      <div className='text-bold text-lg'>{title}</div>
      <div className='text-base text'>{value}</div>
    </div>
  );
};

export default Score;
