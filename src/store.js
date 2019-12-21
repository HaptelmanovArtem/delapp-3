import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import logger from 'redux-logger';
import rootReducer from '../src/reducers/index.js';



const Store = createStore(rootReducer,applyMiddleware(logger,thunkMiddleware));

export default Store;