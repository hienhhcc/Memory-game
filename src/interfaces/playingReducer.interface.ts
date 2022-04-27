import { EPlayerTurn, EPlayingAction, ETileState } from "../enums";
import { IGameConfig } from "./gameConfig.interface";

export interface IState {
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
  gameConfig: IGameConfig;
  countOpen: number;
  tilesDoneCount: number;
  firstOpenTile: {
    index: number | null;
    value: any;
  };
  secondOpenTile: {
    index: number | null;
    value: any;
  };
  buttonOpenStates: (ETileState.OPEN | ETileState.CLOSE | ETileState.DONE)[];
}

export interface IPayload {
  gameConfig?: IGameConfig | any;
  buttonIndex?: number;
  buttonValue?: any;
  time?: {
    minute: number;
    second: number;
  };
}

export interface IAction {
  type: EPlayingAction;
  payload?: IPayload;
}
