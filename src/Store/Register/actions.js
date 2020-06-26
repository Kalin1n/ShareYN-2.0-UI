export const REGISTER_CHANGE_NAME = 'REGISTER_CHANGE_NAME';
export const REGISTER_CHANGE_SURNAME = 'REGISTER_CHANGE_SURNAME';
export const REGISTER_CHANGE_EMAIL = 'REGISTER_CHANGE_EMAIL';
export const REGISTER_CHANGE_NICKNAME = 'REGISTER_CHANGE_NICKNAME';
export const REGISTER_CHANGE_PASSWORD = 'REGISTER_CHANGE_PASSWORD';
export const REGISTER_CHANGE_CHECK_PASSWORD = 'REGISTER_CHANGE_CHECK_PASSWORD';
export const REGISTER_CHANGE_ERROR = "REGISTER_CHANGE_ERROR";
export const SET_REGISTER_STATUS = 'SET_REGISTER_STATUS';
export const SEND_REGISTER = 'SEND_REGISTER';

export const setNameText = (name) => ({
    type : REGISTER_CHANGE_NAME,
    payload : name
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

export const errorChange = ( error ) => ({
    type : REGISTER_CHANGE_ERROR,
    payload : error
})

export const registerPending = () => (  {
    type: SET_REGISTER_STATUS, 
    status: 'PENDING'
} )
export const registerResolved = ( token ) => ( { 
   type: SET_REGISTER_STATUS, 
   status: 'RESOLVED', 
   payload : token,
   error: null 
})
export const registerRejected = ( error ) => ( { 
   type: SET_REGISTER_STATUS, 
   status: 'REJECTED', 
   payload : null, 
   error  
})
// Register async thunk function 

export function register( name, email, nickname, password ){
    return async dispatch => {
        dispatch(registerPending())
        var data = await ( await fetch('http://localhost:4000/create-user',{
            headers : {
                'Content-Type':"application/json",
                'Accept' :'application/json'
            },
            method : 'POST',
            body : JSON.stringify({name, email, password})
        })).json()
        console.log(data)
        if(data.status === 200 ){
            dispatch(registerResolved(data))
        }
        else{
            dispatch(registerRejected(data.error))
        }
        /*
        return {
            type : SET_REGISTER_STATUS,
            payload : data
        }*/
    }
}
