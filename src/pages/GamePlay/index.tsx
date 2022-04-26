import { useEffect } from "react";
import { GamePlayActions, GamePlayGrid, Modal } from "../../components";
import usePlaying from "../../contexts/usePlaying";

const GamePlay = () => {
  const { countOpen, closeAllTiles, isGameFinished } = usePlaying();
  //! Đóng tất cả các tiles trừ các tiles đã được giải
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    // console.log(countOpen);
    if (countOpen % 2 === 0 && countOpen !== 0) {
      timeout = setTimeout(() => {
        closeAllTiles();
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [countOpen, closeAllTiles]);

  return (
    <main className='p-10'>
      {/* {isGameFinished && <Modal />} */}
      <Modal />
      <GamePlayActions />
      <GamePlayGrid />
    </main>
  );
};

export default GamePlay;
