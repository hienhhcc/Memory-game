import RadioInput from '../../../Form/RadioInput';

const radioInputs = [
  {
    label: '1',
    name: 'numPlayer',
    inputProps: { id: '1', value: 1, checked: true },
  },
  {
    label: '2',
    name: 'numPlayer',
    inputProps: { id: '2', value: 2 },
  },
  {
    label: '3',
    name: 'numPlayer',
    inputProps: { id: '3', value: 3 },
  },
  {
    label: '4',
    name: 'numPlayer',
    inputProps: { id: '4', value: 4 },
  },
];

const PlayersInputControl = () => {
  return (
    <div className="flex justify-center align-center gap-3">
      {radioInputs.map(({ label, inputProps, name }) => (
        <RadioInput
          key={label}
          checkedValue={1}
          label={label}
          name={name}
          inputProps={inputProps}
        />
      ))}
    </div>
  );
};

export default PlayersInputControl;
