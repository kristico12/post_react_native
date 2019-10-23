//utils
import { typeUser } from './type';
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
function GetUser() {
    return (dispatch) => {
        Call(`${hostName}/api/user/profile`, 'GET')
            .then((value) => {
                if (value.hasOwnProperty("message")) {
                    dispatch(
                        TypeActionsDispacht({ data: '', message: value.message }, typeUser.USER_GET_INFO)
                    )
                } else {
                    dispatch(
                        TypeActionsDispacht({ data: value.data, message: '' }, typeUser.USER_GET_INFO)
                    )
                }
            })
            .catch(error => {
                dispatch(
                    TypeActionsDispacht({ data: '', message: error.message }, typeUser.USER_GET_INFO)
                )
            })
    };
}



export {
    GetUser
}

