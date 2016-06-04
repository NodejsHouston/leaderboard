import React from "react";
import ReactDOM from "react-dom";

export default class Home extends React.Component {
  render() {
    return this.props.children || (
      <div>
        <h1>Home Page</h1>
        <h2>The best freaking home page ever!</h2>
      </div>
    );
  }
}
