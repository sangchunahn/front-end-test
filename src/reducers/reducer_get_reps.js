import { GET_REPS } from '../services/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_REPS: 
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}