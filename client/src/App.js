import React, { Component } from "react";
import Router from "./mainc/Router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<div>Loading ....</div>} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
