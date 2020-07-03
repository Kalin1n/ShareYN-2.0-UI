import { oldPasswordChange, newPasswordFFchange, newPasswordSFchange} from "./actions";

const defaultState = { 
    oldPassword : "",
    newPassword : "",
    newPasswordSF : "", 
    status : "", 
    payload : null, 
    error : null
};

export const changePasswordReducer = (state = defaultState, action )=>{
    switch(action.type){
        case oldPasswordChange: 
            return {...state, oldPassword : action.payload };
        case newPasswordFFchange: 
            return {...state, newPassword : action.payload};
        case newPasswordSFchange: 
            return {...state, newPasswordSF : action.payload}
        default : 
            return state
    };
};