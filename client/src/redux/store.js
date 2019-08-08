import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import reducersCreator from "./reducers";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

export const history = createBrowserHistory();
const reducers = reducersCreator(history);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(logger, routerMiddleware(history), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
