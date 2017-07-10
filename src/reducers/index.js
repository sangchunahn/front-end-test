import { combineReducers } from 'redux';
import getSenators from './reducer_get_senators';

const rootReducer = combineReducers({
  senators: getSenators
});

export default rootReducer;