import { IGraphService } from ".";
import { ITeam } from "../models/ITeam";
import { MSGraphClient } from "@microsoft/sp-http";

export class GraphService implements IGraphService {
    private _graphClient: MSGraphClient;

    constructor(graphClient: MSGraphClient) {
        this._graphClient = graphClient;
    }

    public getTeams = async (): Promise<ITeam[]> => {
        let response = await this._graphClient.api(`/me/joinedTeams`).version('v1.0').get();
        let items: any[] = await response.value;

        return items;
    }

    public getTeam = async (teamId: string): Promise<ITeam> => {
        let response = await this._graphClient.api(`/teams/${teamId}`).version('v1.0').get();
     
        return response;
    }
}