import { useCallback, useReducer } from "react";
import { EPlayingAction, ETileState } from "../enums";
import { IAction, IGameConfig, IPlayingContext, IState } from "../interfaces";
import {
  closeAllTiles,
  openTileCase,
  restartGameCase,
  startGameCase,
} from "./helpers";

const initialState = {
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
      return closeAllTiles(state);
    default:
      return state;
  }
};

const usePlayingContextProvider = (): IPlayingContext => {
  // const [isPlaying, setIsPlaying] = useState(false);
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

  return {
    isPlaying: state.isPlaying,
    gameConfig: state.gameConfig,
    countOpen: state.countOpen,
    buttonOpenStates: state.buttonOpenStates,
    firstOpenTile: state.firstOpenTile,
    secondOpenTile: state.secondOpenTile,
    startGame,
    restartGame,
    newGame,
    openTile,
    closeAllTiles,
  };
};

export default usePlayingContextProvider;
