import { AVATAR_CHANGE, SET_NEW_AVATAR_STATUS } from "./actions.js"


const defaultState = { 
    newFile : undefined, 
    status : "", 
    payload : null,
    loaded : false, 
    error : null
};

export const changeUserAvatarReducer = ( state = defaultState, action )=>{
    switch(action.type){
        case  AVATAR_CHANGE: 
            return {...state, newFile : action.file}
        case SET_NEW_AVATAR_STATUS:
            return{...state, payload : action.payload, status : action.status}
        default: 
            return state
    }
}