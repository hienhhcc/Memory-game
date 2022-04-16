import { Form, RadioInput, Button } from 'components';
import useStartGameForm from './hook';

const StartGameForm = () => {
  const { handlers } = useStartGameForm();
  const { onSubmitStartGame } = handlers;

  return (
    <Form onSubmit={onSubmitStartGame}>
      <legend>Select Theme</legend>
      <div className="flex justify-center align-center gap-3">
        <RadioInput
          label="Numbers"
          name="theme"
          inputProps={{
            id: 'numberTheme',
            value: 'number',
            checked: true,
          }}
        />
        <RadioInput
          label="Icons"
          name="theme"
          inputProps={{
            id: 'iconTheme',
            value: 'icon',
          }}
        />
      </div>
      <Button customStyle={'w-full'} type="submit">
        Start Game
      </Button>
    </Form>
  );
};

export default StartGameForm;
