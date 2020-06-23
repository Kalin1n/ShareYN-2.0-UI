import { REGISTER_CHANGE_NICKNAME, 
    REGISTER_CHANGE_EMAIL,
    REGISTER_CHANGE_NAME,
    REGISTER_CHANGE_SURNAME,
    REGISTER_CHANGE_PASSWORD,
    REGISTER_CHANGE_CHECK_PASSWORD,
    REGISTER_CHANGE_ERROR,
    SEND_REGISTER, SET_REGISTER_STATUS } from "./actions";

const defaultState = { 
    name : '',
    email : '',
    nickname : '',
    password : '',
    passwordCheck : '',
    status : null,
    payload : null,
    error : null
};

export const registerReducer = ( state = defaultState, action ) => {
switch (action.type){
    case REGISTER_CHANGE_NAME :
        return {...state, name : action.payload}
    case REGISTER_CHANGE_SURNAME :
        return {...state, surname : action.payload}
    case REGISTER_CHANGE_EMAIL :
        return {...state, email : action.payload}
    case REGISTER_CHANGE_NICKNAME :
        return {...state, nickname : action.payload}
    case REGISTER_CHANGE_PASSWORD :
        return {...state, password : action.payload}
    case REGISTER_CHANGE_CHECK_PASSWORD : 
        return {...state, passwordCheck : action.payload}
    case REGISTER_CHANGE_ERROR: 
        return{...state, error : action.payload}
    case SET_REGISTER_STATUS : 
        return {...state, status : action.status, payload : action.payload, error : action.error}
    case SEND_REGISTER : 
        return {...state, status : action.status, payload : action.payload, error : action.error}
    default : return state;
}
};
