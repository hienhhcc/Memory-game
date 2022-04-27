import { useCallback, useReducer } from "react";
import { EPlayingAction, ETileState, EPlayerTurn } from "../enums";
import { IAction, IGameConfig, IPlayingContext, IState } from "../interfaces";
import {
  closeAllTilesCase,
  openTileCase,
  restartGameCase,
  setTimeTakenCase,
  startGameCase,
} from "./helpers";

const initialState = {
  isPlaying: false,
  isGameFinished: false,
  turn: EPlayerTurn.ONE,
  playerOneTimeTaken: {
    minute: 0,
    second: 0,
  },
  playerOneMoveTaken: 0,
  playerTwoMoveTaken: 0,
  gameConfig: {
    theme: null,
    numPlayer: null,
    gridSize: null,
  },
  countOpen: 0,
  tilesDoneCount: 0,
  firstOpenTile: {
    index: null,
    value: null,
  },
  secondOpenTile: {
    index: null,
    value: null,
  },
  buttonOpenStates: Array.from(Array(36).fill(ETileState.CLOSE)),
};

const playingReducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case EPlayingAction.NEW:
      return initialState;
    case EPlayingAction.START:
      return startGameCase(state, payload!);
    case EPlayingAction.RESTART:
      return restartGameCase(state);
    case EPlayingAction.OPEN:
      return openTileCase(state, payload!);
    case EPlayingAction.CLOSEALL:
      return closeAllTilesCase(state);
    case EPlayingAction.SETTIME:
      return setTimeTakenCase(state, payload!);
    default:
      return state;
  }
};

const usePlayingContextProvider = (): IPlayingContext => {
  const [state, dispatch] = useReducer(playingReducer, initialState);

  const startGame = useCallback((gameConfig: IGameConfig) => {
    dispatch({
      type: EPlayingAction.START,
      payload: {
        gameConfig,
      },
    });
  }, []);

  const restartGame = useCallback(() => {
    dispatch({ type: EPlayingAction.RESTART });
  }, []);

  const newGame = useCallback(() => {
    dispatch({ type: EPlayingAction.NEW });
  }, []);

  const openTile = useCallback((tileIndex: number, tileValue: any) => {
    dispatch({
      type: EPlayingAction.OPEN,
      payload: {
        buttonIndex: tileIndex,
        buttonValue: tileValue,
      },
    });
  }, []);

  const closeAllTiles = useCallback(() => {
    dispatch({ type: EPlayingAction.CLOSEALL });
  }, []);

  const setPlayerOneTimeTaken = useCallback(
    (time: { minute: number; second: number }) => {
      dispatch({ type: EPlayingAction.SETTIME, payload: { time } });
    },
    []
  );

  return {
    isPlaying: state.isPlaying,
    isGameFinished: state.isGameFinished,
    turn: state.turn,
    playerOneTimeTaken: state.playerOneTimeTaken,
    playerOneMoveTaken: state.playerOneMoveTaken,
    playerTwoMoveTaken: state.playerTwoMoveTaken,
    gameConfig: state.gameConfig,
    countOpen: state.countOpen,
    tilesDoneCount: state.tilesDoneCount,
    buttonOpenStates: state.buttonOpenStates,
    firstOpenTile: state.firstOpenTile,
    secondOpenTile: state.secondOpenTile,
    startGame,
    restartGame,
    newGame,
    openTile,
    closeAllTiles,
    setPlayerOneTimeTaken,
  };
};

export default usePlayingContextProvider;
