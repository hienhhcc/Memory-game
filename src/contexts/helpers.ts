import { EPlayerTurn, ETileState } from "../enums";
import { IPayload, IState } from "../interfaces";

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

export const startGameCase = (state: IState, payload: IPayload): IState => {
  return {
    ...state,
    isPlaying: true,
    gameConfig: payload?.gameConfig,
  };
};

export const restartGameCase = (state: IState): IState => {
  return {
    ...initialState,
    isPlaying: true,
    gameConfig: state.gameConfig,
  };
};

const isFirstTileOpen = (state: IState) => state.firstOpenTile.value;
const isSecondTileIsTheFirstOne = (state: IState, payload: IPayload) =>
  state.firstOpenTile.value &&
  payload?.buttonIndex! === state.firstOpenTile.index;
const isTwoTileValueEqual = (state: IState, payload: IPayload) =>
  payload?.buttonValue! === state.firstOpenTile.value;
const isGameDone = (state: IState) => {
  return state.tilesDoneCount === state.gameConfig.gridSize! - 2;
};
const isFirstPlayerTurn = (state: IState) => state.turn === EPlayerTurn.ONE;
const isSingle = (state: IState) => state.gameConfig.numPlayer === 1;

const handleNotYetOpenFirstTile = (state: IState, payload: IPayload) => {
  let newButtonOpenStates = [...state.buttonOpenStates];
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
};

const handleTwoTileValueEqual = (
  state: IState,
  payload: IPayload,
  isSingle: boolean
) => {
  //TODO: Đánh dấu 2 ô done
  let newButtonOpenStates = [...state.buttonOpenStates];
  newButtonOpenStates[state.firstOpenTile.index!] = ETileState.DONE;
  newButtonOpenStates[payload?.buttonIndex!] = ETileState.DONE;

  if (isGameDone(state)) {
    if (isSingle) {
      return {
        ...state,
        isGameFinished: true,
        playerOneMoveTaken: state.playerOneMoveTaken + 1,
      };
    }

    if (isFirstPlayerTurn(state)) {
      return {
        ...state,
        isGameFinished: true,
        playerOneMoveTaken: state.playerOneMoveTaken + 1,
        turn: EPlayerTurn.TWO,
      };
    } else {
      return {
        ...state,
        isGameFinished: true,
        playerTwoMoveTaken: state.playerTwoMoveTaken + 1,
        turn: EPlayerTurn.ONE,
      };
    }
  }
  let newState = {
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
    tilesDoneCount: state.tilesDoneCount + 2,
    buttonOpenStates: newButtonOpenStates,
  };
  if (isSingle) {
    return {
      ...newState,
      playerOneMoveTaken: state.playerOneMoveTaken + 1,
    };
  }
  if (isFirstPlayerTurn(state)) {
    return {
      ...newState,
      playerOneMoveTaken: state.playerOneMoveTaken + 1,
      turn: EPlayerTurn.TWO,
    };
  } else {
    return {
      ...newState,
      playerTwoMoveTaken: state.playerTwoMoveTaken + 1,
      turn: EPlayerTurn.ONE,
    };
  }
};

const handleTwoTileValueNotEqual = (
  state: IState,
  payload: IPayload,
  isSingle: boolean
) => {
  //TODO: Nếu không giống nhau
  let newButtonOpenStates = [...state.buttonOpenStates];
  newButtonOpenStates[payload?.buttonIndex!] = ETileState.OPEN;
  let newState = {
    ...state,
    countOpen: state.countOpen + 1,
    secondOpenTile: {
      index: payload?.buttonIndex!,
      value: payload?.buttonValue!,
    },
    buttonOpenStates: newButtonOpenStates,
  };
  if (isSingle) {
    return {
      ...newState,
      playerOneMoveTaken: newState.playerOneMoveTaken + 1,
    };
  } else {
    if (isFirstPlayerTurn(state)) {
      return {
        ...newState,
        playerOneMoveTaken: newState.playerOneMoveTaken + 1,
        turn: EPlayerTurn.TWO,
      };
    } else {
      return {
        ...newState,
        playerTwoMoveTaken: newState.playerTwoMoveTaken + 1,
        turn: EPlayerTurn.ONE,
      };
    }
  }
};

const handleOpenTileCase = (
  state: IState,
  payload: IPayload,
  isSingle: boolean
) => {
  if (!isFirstTileOpen(state)) {
    console.log("FIRST TILE NOT OPEN");
    return handleNotYetOpenFirstTile(state, payload);
  }

  if (isSecondTileIsTheFirstOne(state, payload)) {
    console.log("SECOND TILE IS THE FIRST ONE");
    return {
      ...state,
    };
  }

  if (isTwoTileValueEqual(state, payload)) {
    console.log("TWO TILE EQUAL");
    if (isSingle) return handleTwoTileValueEqual(state, payload, true);
    else return handleTwoTileValueEqual(state, payload, false);
  }
  console.log("TWO TILE NOT EQUAL");
  if (isSingle) {
    return handleTwoTileValueNotEqual(state, payload, true);
  } else {
    return handleTwoTileValueNotEqual(state, payload, false);
  }
};

export const openTileCase = (state: IState, payload: IPayload): IState => {
  if (isSingle(state)) {
    return handleOpenTileCase(state, payload, true);
  } else {
    return handleOpenTileCase(state, payload, false);
  }
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

export const setTimeTakenCase = (state: IState, payload: IPayload): IState => {
  return {
    ...state,
    playerOneTimeTaken: {
      minute: payload.time?.minute!,
      second: payload.time?.second!,
    },
  };
};
