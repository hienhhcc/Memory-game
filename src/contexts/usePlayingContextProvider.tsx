import { useCallback, useReducer } from 'react';
import { EPlayingAction, ETileState } from '../enums';
import { IAction, IGameConfig, IPlayingContext, IState } from '../interfaces';

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

  let newButtonOpenStates = [...state.buttonOpenStates];
  switch (type) {
    case EPlayingAction.NEW:
      return initialState;
    case EPlayingAction.START:
      return {
        ...state,
        isPlaying: true,
        gameConfig: payload?.gameConfig,
      };
    case EPlayingAction.RESTART:
      return {
        ...state,
        isPlaying: true,
        gameConfig: state.gameConfig,
        countOpen: 0,
        buttonOpenStates: Array.from(Array(36).fill(ETileState.CLOSE)),
      };
    case EPlayingAction.OPEN:
      newButtonOpenStates[payload?.buttonIndex!] = ETileState.OPEN;
      //TODO: Nếu chưa mở ô đầu
      if (!state.firstOpenTile.value) {
        return {
          ...state,
          countOpen: state.countOpen + 1,
          firstOpenTile: {
            index: payload?.buttonIndex!,
            value: payload?.buttonValue!,
          },
          buttonOpenStates: newButtonOpenStates,
        };
      }

      //TODO: Nếu ô vừa mở là ô đầu
      if (
        state.firstOpenTile.value &&
        payload?.buttonIndex! === state.firstOpenTile.index
      ) {
        return {
          ...state,
        };
      }

      //TODO: Đã mở ô đâù, nếu giá trị ô sau và ô đầu giống nhau
      if (payload?.buttonValue! === state.firstOpenTile.value) {
        //TODO: Đánh dấu 2 ô done
        newButtonOpenStates[state.firstOpenTile.index!] = ETileState.DONE;
        newButtonOpenStates[payload?.buttonIndex!] = ETileState.DONE;
        return {
          ...state,
          countOpen: state.countOpen + 1,
          firstOpenTile: {
            index: null,
            value: null,
          },
          secondOpenTile: {
            index: null,
            value: null,
          },
          buttonOpenStates: newButtonOpenStates,
        };
      }

      //TODO: Nếu không giống nhau
      newButtonOpenStates[payload?.buttonIndex!] = ETileState.OPEN;
      return {
        ...state,
        countOpen: state.countOpen + 1,
        secondOpenTile: {
          index: payload?.buttonIndex!,
          value: payload?.buttonValue!,
        },
        buttonOpenStates: newButtonOpenStates,
      };

    case EPlayingAction.CLOSEALL:
      newButtonOpenStates = newButtonOpenStates.map((state) => {
        if (state === ETileState.DONE) return state;
        else return ETileState.CLOSE;
      });

      return {
        ...state,
        firstOpenTile: {
          index: null,
          value: null,
        },
        secondOpenTile: {
          index: null,
          value: null,
        },
        buttonOpenStates: newButtonOpenStates,
      };
    default:
      return state;
  }
};

const usePlayingContextProvider = (): IPlayingContext => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [state, dispatch] = useReducer(playingReducer, initialState);

  const startGame = (gameConfig: IGameConfig) => {
    dispatch({
      type: EPlayingAction.START,
      payload: {
        gameConfig,
      },
    });
  };

  const restartGame = () => {
    dispatch({ type: EPlayingAction.RESTART });
  };

  const newGame = () => {
    dispatch({ type: EPlayingAction.NEW });
  };

  const openTile = (tileIndex: number, tileValue: any) => {
    dispatch({
      type: EPlayingAction.OPEN,
      payload: {
        buttonIndex: tileIndex,
        buttonValue: tileValue,
      },
    });
  };

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
