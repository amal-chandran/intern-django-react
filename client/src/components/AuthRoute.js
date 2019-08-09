import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export class AuthRoute extends Component {
  render() {
    const { component: Component, render, ...routeProps } = this.props;
    return (
      <Route
        {...routeProps}
        render={props =>
          this.props.isLogined ? (
            Component ? (
              <Component {...props} />
            ) : (
              render(props)
            )
          ) : (
            <Redirect
              to={{
                pathname: "/auth"
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isLogined: state.auth.isLogined
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
