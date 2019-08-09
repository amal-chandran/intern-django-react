import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import reducersCreator from "./reducers";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

export const history = createBrowserHistory();
const rootReducer = reducersCreator(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, routerMiddleware(history), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);
