## spfx-webpart-myteams

This solutions is a basic WebPart build with [SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview) for SharePoint Online. The webpart lists all the teams the current user is a member of. Uses the Microsoft Graph to receieve the list with the "User.Read.All" scope.

Each team is displayed with a title, description (if available), archive status and an acronym icon. The sort order is by default from the Microsoft Graph, and at the current time is not possible to change.

## Possible improvements

This is a basic example and not a fully developed solution, so there is a few possible improvements that's on the top of my mind:

* Get icon or acronym from the Office 365 group
* Filter out archived teams and allow it to be configured
* Limit the number of teams to show and allow it to be configured

## Getting started

```bash
git clone the repo
npm i
gulp serve
```

## Depoyment and usage

Build the app with:

```bash
gulp bundle --ship
gulp package-solution --ship
```

Enable the app:

1. Upload the file "spfx-webpart-sitesifollow.sppkg" from  "/sharepoint/solution" to the App Catalog.
2. Grant necessary permissions for the app if not already present (User.Read.All) in the SharePoint Admin portal (see: https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient#manage-permission-requests)
2. Go to either a modern Communication or Team Site.
3. Go to "Site contents" and add new "App"
4. Select "spfx-webpart-myteams" and wait for it to be installed
5. Go to the front page, edit the page and add the "My Teams" webpart