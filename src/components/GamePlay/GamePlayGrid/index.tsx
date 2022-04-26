import { useEffect, useState } from "react";
import usePlaying from "../../../contexts/usePlaying";
import { createGridItems } from "../../../helpers/createGridItems.helper";
import GamePlayGridItem from "./GamePlayGridItem";

const GamePlayGrid = () => {
  const {
    gameConfig: { theme, gridSize },
    countOpen,
  } = usePlaying();
  const [gridItems, setGridItems] = useState(
    createGridItems({ theme, gridSize })
  );

  useEffect(() => {
    if (countOpen === 0) {
      setGridItems(createGridItems({ theme, gridSize }));
    }
  }, [countOpen, gridSize, theme]);

  return (
    <div className='max-w-[768px] mx-auto'>
      <div
        className={`grid justify-center justify-items-center align-center ${
          gridSize === 16 ? "grid-cols-4" : "grid-cols-6"
        } my-6 gap-2 min-w-[300px]`}
      >
        {gridItems?.map((item: any, index) => (
          <GamePlayGridItem buttonIndex={index} key={item + Math.random()}>
            {item}
          </GamePlayGridItem>
        ))}
      </div>
    </div>
  );
};

export default GamePlayGrid;
