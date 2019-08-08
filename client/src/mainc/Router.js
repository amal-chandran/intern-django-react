import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./../redux/store";

import BlogMainPage from "./../pages/BlogMainPage";
import AdminPage from "./../pages/AdminPage";
import LoginRegisterPage from "./../pages/LoginRegisterPage";

export default class Router extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/auth" exact component={LoginRegisterPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/" exact component={BlogMainPage} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
