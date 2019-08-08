import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";

export class AdminPage extends Component {
  render() {
    return <MainLayout>Admin</MainLayout>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
