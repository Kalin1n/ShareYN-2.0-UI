import {SIGN_IN_CHANGE_NICKNAME,
    SIGN_IN_CHANGE_PASSWORD,
    SIGN_IN,
   SEND_SIGN_IN, SET_STATUS
} from './actions.js';
    
const defaultState = { 
    nickname : '',
    password : '',
    status : 'empty',
    payload : null,
    error :null
};
export const signInReducer = (state = defaultState, action) => {
    //console.log(state)
    switch (action.type){
        case SIGN_IN_CHANGE_NICKNAME :
            return  {...state, nickname : action.payload}
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
