interface Props {
  htmlFor: string;
  children: string;
}

const RadioInputLabel = ({ htmlFor, children }: Props) => {
  return (
    <label
      className={
        'rounded-full text-white bg-slate-700 p-3 w-full text-center cursor-pointer'
      }
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default RadioInputLabel;
