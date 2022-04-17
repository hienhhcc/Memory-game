import { EPlayingAction } from '../enums';
import { IGameConfig } from './gameConfig.interface';

export interface IState {
  isPlaying: boolean;
  gameConfig: IGameConfig;
  countOpen: number;
  buttonOpenStates: boolean[];
}

export interface IAction {
  type: EPlayingAction;
  payload?: {
    gameConfig?: IGameConfig | any;
    buttonIndex?: number;
  };
}
