import { ETileState } from "../enums";
import { IPayload, IState } from "../interfaces";

export const startGameCase = (state: IState, payload: IPayload): IState => {
  return {
    ...state,
    isPlaying: true,
    gameConfig: payload?.gameConfig,
  };
};

export const restartGameCase = (state: IState): IState => {
  return {
    ...state,
    isPlaying: true,
    isGameFinished: false,
    gameConfig: state.gameConfig,
    countOpen: 0,
    buttonOpenStates: Array.from(Array(36).fill(ETileState.CLOSE)),
  };
};

export const openTileCase = (state: IState, payload: IPayload): IState => {
  const isFirstTileOpen = () => state.firstOpenTile.value;
  const isSecondTileIsTheFirstOne = () =>
    state.firstOpenTile.value &&
    payload?.buttonIndex! === state.firstOpenTile.index;
  const isTwoTileValueEqual = () =>
    payload?.buttonValue! === state.firstOpenTile.value;
  const isGameDone = () => {
    return state.tilesDoneCount === state.gameConfig.gridSize! - 2;
  };

  let newButtonOpenStates = [...state.buttonOpenStates];

  //TODO: Nếu chưa mở ô đầu
  if (!isFirstTileOpen()) {
    newButtonOpenStates[payload?.buttonIndex!] = ETileState.OPEN;
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
  if (isSecondTileIsTheFirstOne()) {
    return {
      ...state,
    };
  }

  //TODO: Đã mở ô đâù, nếu giá trị ô sau và ô đầu giống nhau
  if (isTwoTileValueEqual()) {
    //TODO: Đánh dấu 2 ô done
    newButtonOpenStates[state.firstOpenTile.index!] = ETileState.DONE;
    newButtonOpenStates[payload?.buttonIndex!] = ETileState.DONE;

    if (isGameDone()) {
      return {
        ...state,
        isGameFinished: true,
      };
    }

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
};

export const closeAllTilesCase = (state: IState): IState => {
  let newButtonOpenStates = [...state.buttonOpenStates];
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
};
