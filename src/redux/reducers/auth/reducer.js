// utils
import { typeAuth } from './type';

const initialstate = {
    message: '',
    token: ''
}

export function Auth(state = initialstate, action) {
    switch (action.type) {
        case typeAuth.AUTH_GET_TOKEN:
            return action.payload
        case typeAuth.AUTH_CLEAR:
            return state
        default:
            return state
    }
}
