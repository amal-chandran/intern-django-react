import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "./../mainc/MainLayout";

export class BlogMainPage extends Component {
  render() {
    return <MainLayout>Blog Page</MainLayout>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMainPage);
