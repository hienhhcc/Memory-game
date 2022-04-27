import { createContext } from "react";
import { EPlayerTurn, ETileState } from "../enums";
import { IGameConfig, IPlayingContext } from "../interfaces";

const PlayingContext = createContext<IPlayingContext>({
  isPlaying: false,
  isGameFinished: false,
  turn: EPlayerTurn.ONE,
  playerOneTimeTaken: {
    minute: 0,
    second: 0,
  },
  playerOneMoveTaken: 0,
  playerOneScore: 0,
  playerTwoScore: 0,
  tilesDoneCount: 0,
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
  setPlayerOneTimeTaken: (time: { minute: number; second: number }) => {},
});

export default PlayingContext;
