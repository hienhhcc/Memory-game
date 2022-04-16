import { SubmitHandler } from 'react-hook-form';

interface IFormValues {
  theme: string;
}

const useStartGameForm = () => {
  const onSubmitStartGame: SubmitHandler<IFormValues> = (values) => {
    console.log(values);
  };

  return {
    handlers: { onSubmitStartGame },
  };
};

export default useStartGameForm;
