import { combineReducers} from 'redux';
import { registerReducer } from './Register/reducer';
import { signInReducer } from './Signin/reducer';
import { changeUserAvatarReducer} from "./ChangeUserAvatar/reducer";
import { newArticleReducer } from "./ArticleNew/reducer.js";
import {getUserReducer} from "./UserPage/reducer.js";
import {changePasswordReducer} from "./ChangePassword/reducer.js";
export default combineReducers({
    signIn : signInReducer,
    register : registerReducer,
    changeAvatar : changeUserAvatarReducer,
    newArticleReducer : newArticleReducer,
    userPage : getUserReducer,
    changePassword : changePasswordReducer
});
