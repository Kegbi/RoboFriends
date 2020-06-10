import React, { Component } from 'react';
import {connect} from "react-redux";

import {setSearchField, requestRobots} from "../redux/actions";
import MainPage from "../components/main_page/MainPage";
import {IAppBaseProps, IRobotsState, ISomeProps} from "../types/types";

const mapStateToProps = (state: IAppBaseProps) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>):void => dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component<ISomeProps, IRobotsState> {
  render():JSX.Element {
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);