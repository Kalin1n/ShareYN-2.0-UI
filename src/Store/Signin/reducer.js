import {SIGN_IN_CHANGE_EMAIL,
    SIGN_IN_CHANGE_PASSWORD,
    SIGN_IN,
   SEND_SIGN_IN, SET_STATUS
} from './actions.js';
    
const defaultState = { 
    email : '',
    password : '',
    status : 'empty',
    payload : "",
    error :null
};
export const signInReducer = (state = defaultState, action) => {
    //console.log(state)
    switch (action.type){
        case SIGN_IN_CHANGE_EMAIL :
            return  {...state, email : action.payload}
        case SIGN_IN_CHANGE_PASSWORD :
            return  {...state, password : action.payload}
        case SIGN_IN : 
            return {...state}
        case SEND_SIGN_IN : 
            console.log ({...state}, action.status)
            break;
        case SET_STATUS :
            return {...state,status : action.status, payload : action.payload, error : action.error}
        default : 
            return state
    };
}
