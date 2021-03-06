import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "../reducers/RootReducer";

import { createLogger } from "redux-logger";

const logger = createLogger();

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
