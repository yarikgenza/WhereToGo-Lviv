import { combineReducers } from 'redux';

import location from './location';
import places from './places';

const rootReducer = combineReducers({
  location,
  places,
});

export default rootReducer;
