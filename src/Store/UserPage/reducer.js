import {USERPAGE_STATUS} from "./actions";

const defaultState = { 
    name : "",
    email : "", 
    password : "",
    status : "",
    payload : null,
    error : null
};

export const getUserReducer = (state = defaultState, action) =>{
    switch(action.type){
        case USERPAGE_STATUS : 
            return {...state, status : action.status, payload : action.payload, error : action.error}
        default: 
            return state;
    };
};

