// utils
import { typeAuth } from './type';

const initialState = {
    message: '',
    token: '',
};

export function Auth(state = initialState, action) {
    switch (action.type) {
        case typeAuth.AUTH_GET_TOKEN:
            return action.payload;
        case typeAuth.AUTH_CLEAR:
            return initialState;
        default:
            return state
    }
}
