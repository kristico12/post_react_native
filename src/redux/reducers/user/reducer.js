// utils
import { typeUser } from './type';

const initialState = {
    message: '',
    data: ''
}

export function User(state = initialState, action) {
    switch (action.type) {
        case typeUser.USER_GET_INFO:
            return action.payload
        case typeUser.USER_GET_INFO:
            return initialState
        default:
            return state
    }
}
