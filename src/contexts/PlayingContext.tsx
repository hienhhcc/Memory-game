import { createContext } from 'react';
import { IGameConfig, IPlayingContext } from '../interfaces';

const PlayingContext = createContext<IPlayingContext>({
  isPlaying: false,
  gameConfig: {
    theme: null,
    numPlayer: null,
    gridSize: null,
  },
  countOpen: 0,
  buttonOpenStates: Array.from(Array(36).fill(false)),
  startGame: (gameConfig: IGameConfig) => {},
  restartGame: () => {},
  newGame: () => {},
});

export default PlayingContext;
