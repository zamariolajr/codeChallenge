import { combineReducers } from 'redux';
import { showCat } from './cat'

const rootReducer = combineReducers({
  cat: showCat
});

export default rootReducer;