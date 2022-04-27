import { MoveScore, TimeScore } from "../../../index";

const SingleGamePlayScore = () => {
  return (
    <div className='flex justify-center items-center gap-4 mx-auto my-4'>
      <TimeScore />
      <MoveScore />
    </div>
  );
};

export default SingleGamePlayScore;
