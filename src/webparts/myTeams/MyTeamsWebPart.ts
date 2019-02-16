import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyTeamsWebPartStrings';
import MyTeams from './components/MyTeams';
import { IMyTeamsProps } from './components/IMyTeamsProps';
import { IGraphService, GraphService } from './services';

export interface IMyTeamsWebPartProps {
}

export default class MyTeamsWebPart extends BaseClientSideWebPart<IMyTeamsWebPartProps> {
  private _graphService: IGraphService;

  public async onInit(): Promise<void> {
    return super.onInit().then(async (_) => {
      this._graphService = new GraphService(await this.context.msGraphClientFactory.getClient());
    });
  }

  public render(): void {
    const element: React.ReactElement<IMyTeamsProps > = React.createElement(
      MyTeams,
      {
        graphService: this._graphService
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: []
            }
          ]
        }
      ]
    };
  }
}
