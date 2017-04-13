import { combineReducers } from 'redux';

import ui from './ui';
import location from './location';
import places from './places';

const rootReducer = combineReducers({
  ui,
  location,
  places,
});

export default rootReducer;
