import usePlaying from '../../../contexts/usePlaying';
import { createGridItems } from '../../../helpers/createGridItems.helper';
import GamePlayGridItem from './GamePlayGridItem';

const GamePlayGrid = () => {
  const {
    gameConfig: { theme, gridSize },
  } = usePlaying();

  const gridItems = createGridItems({ theme, gridSize });

  return (
    <div className="max-w-[768px] mx-auto">
      <div
        className={`grid justify-center justify-items-center align-center ${
          gridSize === '44' ? 'grid-cols-4' : 'grid-cols-6'
        } my-6 gap-2 min-w-[300px]`}
      >
        {gridItems.map((item: any) => (
          <GamePlayGridItem key={item}>{item}</GamePlayGridItem>
        ))}
      </div>
    </div>
  );
};

export default GamePlayGrid;
