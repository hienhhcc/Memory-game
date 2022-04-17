import { ETileState } from '../enums';
import { IGameConfig } from './gameConfig.interface';

export interface IPlayingContext {
  isPlaying: boolean;
  gameConfig: {
    theme: string | null;
    numPlayer: string | null;
    gridSize: string | null;
  };
  countOpen: number;
  firstOpenTile: {
    index: number | null;
    value: any;
  };
  secondOpenTile: {
    index: number | null;
    value: any;
  };
  buttonOpenStates: (ETileState.OPEN | ETileState.CLOSE | ETileState.DONE)[];
  startGame: (gameConfig: IGameConfig) => void;
  restartGame: () => void;
  newGame: () => void;
  openTile: (tileIndex: number, tileValue: any) => void;
  closeAllTiles: () => void;
}
