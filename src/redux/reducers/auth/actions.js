// dependencies
import AsyncStorage from '@react-native-community/async-storage';

//utils
import { typeAuth } from './type';
import Call from '../../../utils/call';
import { hostName } from '../../../utils/globalsVariables';

//actions types reducer
function LoadAuthTokenAction(data) {
    return {
        type: typeAuth.AUTH_GET_TOKEN,
        payload: data,
    };
}

// functions call dispacher
function CreateUser(user) {
    return async (dispatch) => {
        Call(`${hostName}/api/user/create`, 'POST', user)
            .then(value => {
                try {
                    await AsyncStorage.setItem('@token', value.token)
                } catch (e) {
                       
                }
                dispatch(
                    LoadAuthTokenAction({ token: value.token, message: '' })
                )
            })
            .catch(error => {
                dispatch(
                    LoadAuthTokenAction({ token: '', message: error })
                )
            })
    };
}

export {
    CreateUser,
}

