import React, { Component } from "react";
import MainNavBar from "./MainNavBar";

export default class MainLayout extends Component {
  render() {
    return (
      <>
        <MainNavBar />
        <div className="container pt-4">{this.props.children}</div>
      </>
    );
  }
}
