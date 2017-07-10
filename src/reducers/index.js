import { combineReducers } from 'redux';
import getSenators from './reducer_get_senators';
import getReps from './reducer_get_reps';

const rootReducer = combineReducers({
  senators: getSenators,
  reps: getReps
});

export default rootReducer;