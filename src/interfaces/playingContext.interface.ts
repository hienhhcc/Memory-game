import { EPlayerTurn, ETileState } from "../enums";
import { IGameConfig } from "./gameConfig.interface";

export interface IPlayingContext {
  isPlaying: boolean;
  isGameFinished: boolean;
  turn: EPlayerTurn;
  playerOneTimeTaken: {
    minute: number;
    second: number;
  };
  playerOneMoveTaken: number;
  playerOneScore: number;
  playerTwoScore: number;
  tilesDoneCount: number;
  gameConfig: {
    theme: string | null;
    numPlayer: number | null;
    gridSize: number | null;
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
  setPlayerOneTimeTaken: (time: { minute: number; second: number }) => void;
}
