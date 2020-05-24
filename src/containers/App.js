import React, { Component } from 'react';
import {connect} from "react-redux";
import CardList from "../components/card_list/CardList";
import SearchField from "../components/search_field/SearchField";
import ErrorBoundary from "../components/error_boundary/ErrorBoundary";
import './App.scss';

import {setSearchField, requestRobots} from "../redux/actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase().trim());
    })
    return isPending ?
    <h1>Loading</h1> :
    (
     <div className={'mainblock'}>
       <h1>RoboSearch</h1>
       <SearchField searchChange={onSearchChange} />
       <ErrorBoundary>
         <CardList robots={filteredRobots} />
       </ErrorBoundary>
     </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);