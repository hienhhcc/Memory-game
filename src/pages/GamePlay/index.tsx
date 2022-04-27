import { useEffect } from "react";
import {
  GamePlayActions,
  GamePlayGrid,
  GamePlayScore,
  OnePlayerModal,
  TwoPlayerModal,
} from "../../components";
import usePlaying from "../../contexts/usePlaying";

const GamePlay = () => {
  const { countOpen, closeAllTiles, isGameFinished, gameConfig } = usePlaying();
  const { numPlayer } = gameConfig;
  //! Đóng tất cả các tiles trừ các tiles đã được giải
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    // console.log(countOpen);
    if (countOpen % 2 === 0 && countOpen !== 0) {
      timeout = setTimeout(() => {
        closeAllTiles();
      }, 500);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [countOpen, closeAllTiles]);

  return (
    <main className='p-10'>
      {isGameFinished && numPlayer === 1 && <OnePlayerModal />}
      {isGameFinished && numPlayer === 2 && <TwoPlayerModal />}
      <GamePlayActions />
      <GamePlayGrid />
      <GamePlayScore />
    </main>
  );
};

export default GamePlay;
