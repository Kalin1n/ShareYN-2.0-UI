import { combineReducers} from 'redux';
import { registerReducer } from './Register/reducer';
import { signInReducer } from './Signin/reducer';
import { changeUserAvatarReducer} from "./ChangeUserAvatar/reducer"

export default combineReducers({
    signIn : signInReducer,
    register : registerReducer,
    changeAvatar : changeUserAvatarReducer
});
