import axios from 'axios';

export const GET_SENATORS = 'GET_SENATORS';

const ROOT_URL = 'http://localhost:3002/';

export function getSenators(state) {
    const request = axios.get(`${ROOT_URL}senators/:${state}`)
    return {
        type: GET_SENATORS,
        payload: request
    }
}