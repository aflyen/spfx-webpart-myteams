declare interface IMyTeamsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  TitleLabel: string;
  ArchivedTeamTitle: string;
}

declare module 'MyTeamsWebPartStrings' {
  const strings: IMyTeamsWebPartStrings;
  export = strings;
}
