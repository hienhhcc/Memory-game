import { EPlayingAction, ETileState } from "../enums";
import { IGameConfig } from "./gameConfig.interface";

export interface IState {
  isPlaying: boolean;
  gameConfig: IGameConfig;
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
}

export interface IPayload {
  gameConfig?: IGameConfig | any;
  buttonIndex?: number;
  buttonValue?: any;
}

export interface IAction {
  type: EPlayingAction;
  payload?: IPayload;
}
