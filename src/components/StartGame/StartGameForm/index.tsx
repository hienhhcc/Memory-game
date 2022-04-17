import {
  Form,
  ThemeInputControl,
  PlayersInputControl,
  GridSizeInputControl,
  Button,
} from 'components';
import useStartGameForm from './hook';

const StartGameForm = () => {
  const { handlers } = useStartGameForm();
  const { onSubmitStartGame } = handlers;

  return (
    <Form onSubmit={onSubmitStartGame}>
      <legend className="text-slate-400 mb-2">Select Theme</legend>
      <ThemeInputControl />
      <legend className="text-slate-400 mt-4 mb-2">Number of players</legend>
      <PlayersInputControl />
      <legend className="text-slate-400 mt-4 mb-2">Grid Size</legend>
      <GridSizeInputControl />
      <Button customStyle={'w-full mt-4'} type="submit">
        Start Game
      </Button>
    </Form>
  );
};

export default StartGameForm;
