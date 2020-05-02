import { combineReducers} from 'redux';
import { registerReducer } from './Register/reducer';
import { signInReducer } from './Signin/reducer';

export default combineReducers({
    signIn : signInReducer,
    register : registerReducer
});
