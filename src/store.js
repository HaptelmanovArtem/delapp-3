import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import logger from "redux-logger";
import rootReducer from "../src/reducers/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunkMiddleware))
);

export default Store;
