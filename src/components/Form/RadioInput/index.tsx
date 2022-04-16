import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  inputProps: {
    id: string;
    value: string | number;
    checked?: boolean;
  };
  name: string;
  label: string;
}

const RadioInput = ({ inputProps, name, label }: Props) => {
  const { register, watch } = useFormContext();
  const watchInputName = watch(name, 'number');

  return (
    <Fragment>
      <label
        className={`rounded-full text-white  p-3 w-full text-center cursor-pointer ${
          watchInputName === inputProps.value ? 'bg-slate-700' : 'bg-slate-400'
        }`}
        htmlFor={inputProps.id}
      >
        {label}
      </label>
      <input
        {...register(name)}
        className="absolute opacity-0"
        type="radio"
        name={name}
        id={inputProps.id}
        value={inputProps.value}
        defaultChecked={inputProps.checked}
      />
    </Fragment>
  );
};

export default RadioInput;
