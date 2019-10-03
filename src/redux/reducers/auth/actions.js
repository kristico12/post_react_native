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
    return (dispatch) => {
        Call(`${hostName}/api/user/create`, 'POST', user)
            .then(async (value) => {
                if (value.hasOwnProperty("message")) {
                    dispatch(
                        LoadAuthTokenAction({ token: '', message: value.message })
                    )
                } else {
                    try {
                        dispatch(
                            LoadAuthTokenAction({ token: value.data, message: '' })
                        )
                        await AsyncStorage.setItem('@token', value.data);
                    } catch (e) {

                    }
                }
            })
            .catch(error => {
                dispatch(
                    LoadAuthTokenAction({ token: '', message: error.message })
                )
            })
    };
}


export {
    CreateUser,
}

