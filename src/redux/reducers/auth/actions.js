// dependencies
import { typeAuth } from './type';

//actions types reducer
function LoadAuthTokenAction(data) {
    return {
      type: typeAuth.AUTH_GET_TOKEN,
      payload: data,
    };
}

// functions call dispacher
// function update(key, changes) {
//     return async (dispatch) => {
//       const data = await List.update(key, changes)
//         .catch(error => dispatch(updateError(error)));
//       return data;
//     };
// }
  
  