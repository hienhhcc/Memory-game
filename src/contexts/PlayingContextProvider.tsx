import { ReactChild } from 'react';
import PlayingContext from './PlayingContext';
import usePlayingContextProvider from './usePlayingContextProvider';

interface Props {
  children: ReactChild;
}

const PlayingContextProvider = ({ children }: Props) => {
  const value = usePlayingContextProvider();

  return (
    <PlayingContext.Provider value={value}>{children}</PlayingContext.Provider>
  );
};

export default PlayingContextProvider;
