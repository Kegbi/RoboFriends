import React from "react";

export interface IRobotsParams {
  id: number,
  name: string,
  email: string
}

export interface IRobotsState {
  robots: IRobotsParams[],
  searchField?: string
}

export interface IActionsSearchField {
  type: string,
  payload?: IRobotsParams|string
}

export interface ISomeProps {
  error: string,
  isPending: boolean,
  onRequestRobots: any,
  onSearchChange: any,
  robots: IRobotsParams[],
  searchField: string
}

export interface ISearchFieldProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export interface IAppBaseProps {
  requestRobots: {
    error: string,
    isPending: boolean,
    robots: IRobotsParams[]
  },
  searchRobots: {
    searchField: string
  }
}

export interface IMainProps {
  onSearchChange: any,
  isPending: boolean
}