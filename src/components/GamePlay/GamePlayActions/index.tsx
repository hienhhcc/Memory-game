import Button from '../../Button';

const GamePlayActions = () => {
  return (
    <div className="flex justify-end align-center gap-3 mt-4">
      <Button customStyle={'text-black basis-52 grow-0 shrink-0'} type="button">
        Restart
      </Button>
      <Button customStyle={'text-black basis-52 grow-0 shrink-0'} type="button">
        New game
      </Button>
    </div>
  );
};

export default GamePlayActions;
