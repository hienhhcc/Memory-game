import usePlaying from '../../../contexts/usePlaying';
import Button from '../../Button';

const GamePlayActions = () => {
  const { restartGame, newGame } = usePlaying();

  return (
    <div className="flex justify-end align-center gap-3 mt-4">
      <Button
        onClick={restartGame}
        customStyle={'text-black basis-52 grow-0 shrink-0'}
        type="button"
      >
        Restart
      </Button>
      <Button
        onClick={newGame}
        customStyle={'text-black basis-52 grow-0 shrink-0'}
        type="button"
      >
        New game
      </Button>
    </div>
  );
};

export default GamePlayActions;
