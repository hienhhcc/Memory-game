import RadioInput from '../../../Form/RadioInput';

const radioInputs = [
  {
    label: '4X4',
    name: 'gridSize',
    inputProps: { id: '44', value: 44, checked: true },
  },
  {
    label: '6X6',
    name: 'gridSize',
    inputProps: { id: '66', value: 66 },
  },
];

const GridSizeInputControl = () => {
  return (
    <div className="flex justify-center align-center gap-3">
      {radioInputs.map(({ label, inputProps, name }) => (
        <RadioInput
          key={label}
          checkedValue={'44'}
          label={label}
          name={name}
          inputProps={inputProps}
        />
      ))}
    </div>
  );
};

export default GridSizeInputControl;
