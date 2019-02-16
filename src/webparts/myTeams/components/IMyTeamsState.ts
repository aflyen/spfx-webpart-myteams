import { ITeam } from "../models/ITeam";

export interface IMyTeamsState {
  isLoading: boolean;
  teams: ITeam[];
}
