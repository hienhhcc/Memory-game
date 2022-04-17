import { useEffect } from 'react';
import { GamePlayActions, GamePlayGrid } from '../../components';
import usePlaying from '../../contexts/usePlaying';

const GamePlay = () => {
  const { countOpen, closeAllTiles } = usePlaying();
  // Đóng tất cả các tiles trừ các tiles đã được giải
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    // console.log(countOpen);
    if (countOpen % 2 === 0 && countOpen !== 0) {
      timeout = setTimeout(() => {
        closeAllTiles();
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [countOpen, closeAllTiles]);

  return (
    <main className="p-10">
      <GamePlayActions />
      <GamePlayGrid />
    </main>
  );
};

export default GamePlay;
