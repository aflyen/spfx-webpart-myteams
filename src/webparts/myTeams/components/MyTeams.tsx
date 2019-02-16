import * as React from 'react';
import styles from './MyTeams.module.scss';
import { IMyTeamsProps } from './IMyTeamsProps';
import { IMyTeamsState } from './IMyTeamsState';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITeam } from '../models/ITeam';
import * as strings from 'MyTeamsWebPartStrings';
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class MyTeams extends React.Component<IMyTeamsProps, IMyTeamsState> {
  constructor(props: IMyTeamsProps) {
    super(props);

    this.state = {
      isLoading: true,
      teams: [],
    };
  }

  public async componentDidMount(): Promise<void> {
    // Get list of teams
    let teams: ITeam[] = await this.props.graphService.getTeams();

    this.setState({
      isLoading: false,
      teams
    });
  }

  public render(): React.ReactElement<IMyTeamsProps> {
    if (this.state.isLoading) {
      return(
        <Spinner size={SpinnerSize.small} />
      );
    }

    return (
      <div className={ styles.myTeams }>
        <div className={ styles.row }>
          <div className={ styles.column }>
            <h2 className={ styles.title }>{ strings.TitleLabel }</h2>
          </div>
        </div>
        <div className={ styles.row }>
          {this.state.teams.map((team: ITeam) => 
            <div className={ styles.team } onClick={ () => { this.handleTeamClick(team.id); } }>
              <this.AcronymIcon title={ team.displayName } />
              <div className={ styles.title }>{ team.displayName }{(team.isArchived ? <Icon iconName="Lock" title={ strings.ArchivedTeamTitle } /> : "")}</div>
              <div className={ styles.description }>{ (team.displayName !== team.description ? team.description : "") }</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  private handleTeamClick = async (teamId: string) => {
    let response: any = await this.props.graphService.getTeam(teamId);
    let team: ITeam = response as ITeam;

    if (team === undefined) {
      return;
    }

    location.href = team.webUrl;
  }

  private AcronymIcon = (props: {title: string}) => {
    let acronym = this.getAcronym(props.title);

    return <div className={styles.icon}>
        <div className={ styles.acronym }>{ acronym }</div>
    </div>;
  }

  private getAcronym = (title: string): string => {
      let acronym: string = "";

      // Prepp string
      title = title.replace("-", " ");
      title = title.replace("_", " ");

      if (title.length < 2) {
          // Title with only one letter
          acronym = title.toUpperCase();
      } else {
          let words: string[] = title.split(" ");

          if (words.length < 2) {
              // Title with only one word (no whitespace)
              acronym = words[0].substring(0,2).toUpperCase();
          } else {
              // Title with several words (separated by whitespaces)
              acronym = words[0].substring(0,1).toUpperCase() + words[1].substring(0,1).toUpperCase();
          }
      }

      return acronym;
  }
}
