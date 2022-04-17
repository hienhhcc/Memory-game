import { createContext } from 'react';
import { ETileState } from '../enums';
import { IGameConfig, IPlayingContext } from '../interfaces';

const PlayingContext = createContext<IPlayingContext>({
  isPlaying: false,
  gameConfig: {
    theme: null,
    numPlayer: null,
    gridSize: null,
  },
  countOpen: 0,
  firstOpenTile: {
    index: null,
    value: null,
  },
  secondOpenTile: {
    index: null,
    value: null,
  },
  buttonOpenStates: Array.from(Array(36).fill(ETileState.CLOSE)),
  startGame: (gameConfig: IGameConfig) => {},
  restartGame: () => {},
  newGame: () => {},
  openTile: (tileIndex: number, tileValue: any) => {},
  closeAllTiles: () => {},
});

export default PlayingContext;
