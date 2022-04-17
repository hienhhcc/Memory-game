import { useReducer } from 'react';
import { EPlayingAction } from '../enums';
import { IAction, IGameConfig, IPlayingContext, IState } from '../interfaces';

const initialState = {
  isPlaying: false,
  gameConfig: {
    theme: null,
    numPlayer: null,
    gridSize: null,
  },
  countOpen: 0,
  buttonOpenStates: Array.from(Array(36).fill(false)),
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
        gameConfig: payload?.gameConfig,
        countOpen: 0,
        buttonOpenStates: Array.from(Array(36).fill(false)),
      };
    case EPlayingAction.OPEN:
      newButtonOpenStates[payload?.buttonIndex!] = true;

      return {
        ...state,
        countOpen: state.countOpen + 1,
        buttonOpenStates: newButtonOpenStates,
      };
    case EPlayingAction.CLOSEALL:
      newButtonOpenStates = Array.from(Array(36).fill(false));

      return {
        ...state,
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

  return {
    isPlaying: state.isPlaying,
    gameConfig: state.gameConfig,
    countOpen: state.countOpen,
    buttonOpenStates: state.buttonOpenStates,
    startGame,
    restartGame,
    newGame,
  };
};

export default usePlayingContextProvider;
