import { IGameConfig } from './gameConfig.interface';

export interface IPlayingContext {
  isPlaying: boolean;
  gameConfig: {
    theme: string | null;
    numPlayer: string | null;
    gridSize: string | null;
  };
  countOpen: number;
  buttonOpenStates: boolean[];
  startGame: (gameConfig: IGameConfig) => void;
  restartGame: () => void;
  newGame: () => void;
}
