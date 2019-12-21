import { combineReducers } from 'redux';
import HandleChangeReducer from './HandleChange.js';
import AddClientReducer from './AddClient.js';
import AddClientJSONReducer from './AddClientJSON.js';
import EditOrderReducer from './EditOrder.js';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    HandleChangeReducer,
    AddClientReducer,
    AddClientJSONReducer,
    EditOrderReducer,
    form: formReducer
});