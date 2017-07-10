import { GET_SENATORS } from '../services/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_SENATORS: 
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}