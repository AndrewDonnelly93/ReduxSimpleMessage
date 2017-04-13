import { combineReducers } from 'redux';
import toggleAppReducer from './reducer_toggle_app';
import itemsReducer from './reducer_items';

const rootReducer = combineReducers({
  toggleApp: toggleAppReducer,
  items: itemsReducer
});

export default rootReducer;
