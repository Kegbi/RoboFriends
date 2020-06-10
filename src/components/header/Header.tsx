import React, {Component} from "react";

class Header extends Component {
  shouldComponentUpdate(nextProps:Readonly<any>, nextState:Readonly<any>) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>RoboSearch</h1>
      </div>
    );
  }
}

export default Header;