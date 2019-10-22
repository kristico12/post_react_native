// dependencies
import AsyncStorage from '@react-native-community/async-storage';

//utils
import { typeAuth } from './type';
import Call from '../../../utils/call';
import { hostName } from '../../../utils/globalsVariables';

//actions types reducer
function TypeActionsDispacht(data, type) {
    return {
        type,
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
                        TypeActionsDispacht({ token: '', message: value.message }, typeAuth.AUTH_GET_TOKEN)
                    )
                } else {
                    try {
                        dispatch(
                            TypeActionsDispacht({ token: value.data, message: '' }, typeAuth.AUTH_GET_TOKEN)
                        );
                        await AsyncStorage.setItem('@token', value.data);
                    } catch (e) {

                    }
                }
            })
            .catch(error => {
                dispatch(
                    TypeActionsDispacht({ token: '', message: error.message }, typeAuth.AUTH_GET_TOKEN)
                )
            })
    };
}
async function LoadAuthToken(dispatch) {
    try {
        const token = await AsyncStorage.getItem('@token');
        if (token !== null) {
            dispatch(
                TypeActionsDispacht({ token: token, message: '' }, typeAuth.AUTH_GET_TOKEN)
            )
        }

    } catch (e) {

    }
}
function ClearAuth() {
    return (dispatch) => {
        dispatch(
            TypeActionsDispacht(null, typeAuth.AUTH_CLEAR)
        )
    }
}


export {
    CreateUser,
    LoadAuthToken,
    ClearAuth
}

