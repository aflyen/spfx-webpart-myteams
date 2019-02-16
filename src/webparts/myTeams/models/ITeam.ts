export interface ITeam {
    id: string;
    displayName: string;
    description: string;
    isArchived: string;
    webUrl: string;
    funSettings: ITeamFunSettings;
    guestSettings: ITeamGuestSettings;
    memberSettings: ITeamMemberSettings;
    messagingSettings: ITeamMessagingSettings;
}

export interface ITeamFunSettings {
    allowCustomMemes: boolean;
    allowGiphy: boolean;
    allowStickersAndMemes: boolean;
    giphyContentRating: string;
}

export interface ITeamGuestSettings {
    allowCreateUpdateChannels: boolean;
    allowDeleteChannels: boolean;
}

export interface ITeamMemberSettings {
    allowAddRemoveApps: boolean;
    allowCreateUpdateChannels: boolean;
    allowCreateUpdateRemoveConnectors: boolean;
    allowCreateUpdateRemoveTabs: boolean;
    allowDeleteChannels: boolean;
}

export interface ITeamMessagingSettings {
    allowChannelMentions: boolean;
    allowOwnerDeleteMessages: boolean;
    allowTeamMentions: boolean;
    allowUserDeleteMessages: boolean;
    allowUserEditMessages: boolean;
}