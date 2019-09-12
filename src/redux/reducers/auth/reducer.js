// utils
import { typeAuth } from './type';

export function Auth(state = {}, action) {
    switch (action.type) {
        case typeAuth.AUTH_GET_TOKEN:
            return action.payload;
        case typeAuth.AUTH_CLEAR:
            return state
        default:
            return state
    }
}



