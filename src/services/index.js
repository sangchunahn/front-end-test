import axios from 'axios';

const ROOT_URL = 'http://localhost:3002/';

export function selectBook(id) {
    const request = axios.get(`${ROOT_URL}books/${id}`).then((response) => {
      console.log('response: ', response);
    })
    return {
        type: BOOK_SELECTED,
        payload: request
    }
}