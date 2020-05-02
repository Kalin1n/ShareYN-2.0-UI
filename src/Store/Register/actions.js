import { actionPending, actionResolved, actionRejected } from "../Signin/actions";
export const REGISTER_CHANGE_NAME = 'REGISTER_CHANGE_NAME';
export const REGISTER_CHANGE_SURNAME = 'REGISTER_CHANGE_SURNAME';
export const REGISTER_CHANGE_EMAIL = 'REGISTER_CHANGE_EMAIL';
export const REGISTER_CHANGE_NICKNAME = 'REGISTER_CHANGE_NICKNAME';
export const REGISTER_CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
export const REGISTER_CHANGE_CHECK_PASSWORD = 'REGISTER_CHANGE_CHECK_PASSWORD';
export const SET_STATUS = 'SET_STATUS'
export const SEND_REGISTER = 'SEND_REGISTER'
export const setNameText = (name) => ({
    type : REGISTER_CHANGE_NAME,
    payload : name
});
export const setSurnameText = (surname) => ({
    type : REGISTER_CHANGE_SURNAME,
    payload : surname
});
export const setNicknameText = (nickname) => ({
    type : REGISTER_CHANGE_NICKNAME,
    payload : nickname
});
export const setEmailText = (email) => ({
    type : REGISTER_CHANGE_EMAIL,
    payload : email
});
export const setPasswordText = (password) => ({
    type : REGISTER_CHANGE_PASSWORD,
    payload : password
});
export const setPasswordChangeText = (passwordChange) => ({
    type : REGISTER_CHANGE_CHECK_PASSWORD,
    payload : passwordChange
})

// Register async thunk function 

export function register( name, surname, email, nickname, password ){
    return async dispatch => {
        dispatch(actionPending())
        var data = await ( await fetch('http://localhost:5000/register',{
            headers : {
                'Content-Type':"application/json",
                'Accept' :'application/json'
            },
            method : 'POST',
            body : JSON.stringify({name, surname, email, nickname, password})
        })).json()
        console.log(data)
        if(!!data.status){
            dispatch(actionResolved(data))
        }
        else{
            dispatch(actionRejected(data.error))
        }
        return {
            type : SET_STATUS,
            payload : data
        }
    }
}
