import { useContext } from 'react';
import PlayingContext from './PlayingContext';

const usePlaying = () => {
  return useContext(PlayingContext);
};

export default usePlaying;
