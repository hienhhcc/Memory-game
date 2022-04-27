import RadioInput from '../../../Form/RadioInput';

const radioInputs = [
  {
    label: 'Numbers',
    name: 'theme',
    inputProps: { id: 'numberTheme', value: 'number', checked: true },
  },
  {
    label: 'Symbols',
    name: 'theme',
    inputProps: { id: 'iconTheme', value: 'symbol' },
  },
];

const ThemeInputControl = () => {
  return (
    <div className="flex justify-center align-center gap-3">
      {radioInputs.map(({ inputProps, label, name }) => (
        <RadioInput
          key={label}
          label={label}
          name={name}
          checkedValue="number"
          inputProps={inputProps}
        />
      ))}
    </div>
  );
};

export default ThemeInputControl;
