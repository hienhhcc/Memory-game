import { SubmitHandler } from "react-hook-form";
import usePlaying from "../../../contexts/usePlaying";

interface IFormValues {
  theme: string;
  numPlayer: string;
  gridSize: number;
}

const useStartGameForm = () => {
  const { startGame } = usePlaying();

  const onSubmitStartGame: SubmitHandler<IFormValues> = (values) => {
    console.log(values);
    startGame({
      ...values,
      gridSize: +values.gridSize,
      numPlayer: +values.numPlayer,
    });
  };

  return {
    handlers: { onSubmitStartGame },
  };
};

export default useStartGameForm;
