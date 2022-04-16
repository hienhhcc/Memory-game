import { ReactElement } from 'react';
import StartGameForm from '../StartGameForm';

interface Props {
  // children: ReactElement | ReactElement[];
}

const StartGameCard = () => {
  return (
    <div className="rounded-md bg-gray-100 m-auto w-[568px] p-4">
      <StartGameForm />
    </div>
  );
};

export default StartGameCard;
