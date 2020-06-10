import React, { Component } from 'react';
import CardList from "../card_list/CardList";
import SearchField from "../search_field/SearchField";
import ErrorBoundary from "../error_boundary/ErrorBoundary";
import Header from "../header/Header";
import './mainpage.scss';
import {IMainProps, IRobotsParams, ISomeProps} from "../../types/types";

class MainPage extends Component<ISomeProps> {

  componentDidMount():void {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter((robot:IRobotsParams) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase().trim());
    })
  }

  render():JSX.Element {
    const { onSearchChange, isPending }:IMainProps = this.props;
    return isPending ?
      <h1>Loading</h1> :
      (
          <div className={'mainblock'}>
            <Header/>
            <SearchField searchChange={onSearchChange} />
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </div>
      );
  }
}

export default MainPage;