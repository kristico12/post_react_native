//dependencies
import { combineReducers } from 'redux';

// import reducers
import { Auth } from './auth/reducer';
import { User } from './user/reducer';

export default combineReducers({
    Auth,
    User
})