import { ReactElement, MouseEventHandler } from 'react';

interface Props {
  children: ReactElement | ReactElement[] | string;
  type: 'submit' | 'button' | 'reset';
  customStyle?: any;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  children,
  type,
  customStyle,
  onClick = undefined,
}: Props) => {
  return (
    <button
      type={type}
      className={`cursor-pointer py-3 px-1 my-2 rounded-full text-center text-white uppercase 
        hover:bg-orange-300 ${
          type === 'submit' ? 'bg-orange-500' : 'bg-slate-400'
        } ${customStyle ? customStyle : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
