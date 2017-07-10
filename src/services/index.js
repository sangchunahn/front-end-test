import axios from 'axios';

export const GET_SENATORS = 'GET_SENATORS';
export const GET_REPS = 'GET_REPS';

const ROOT_URL = 'http://localhost:3002/';

export function getSenators(state) {
    const request = axios.get(`${ROOT_URL}senators/${state}`)
    return {
        type: GET_SENATORS,
        payload: request
    }
}

export function getReps(state) {
    const request = axios.get(`${ROOT_URL}representatives/${state}`)
    return {
        type: GET_REPS,
        payload: request
    }
}