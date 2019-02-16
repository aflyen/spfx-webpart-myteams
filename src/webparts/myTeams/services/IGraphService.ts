import { ITeam } from "../models/ITeam";
import { MSGraphClient } from "@microsoft/sp-http";

export interface IGraphService {
    getTeams: () => Promise<ITeam[]>;
    getTeam: (id: string) => Promise<ITeam>;
}