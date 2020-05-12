
export const SIGN_IN_CHANGE_EMAIL = 'SIGN_IN_CHANGE_EMAIL';
export const SIGN_IN_CHANGE_PASSWORD = 'SIGN_IN_CHANGE_PASSWORD';
export const SET_STATUS = 'SET_STATUS';
export const SIGN_IN = 'SIGN_IN';
export const SEND_SIGN_IN = 'SEND_SIGN_IN';

export const setEmailText = (email) => ( {
    type : SIGN_IN_CHANGE_EMAIL,
    payload : email
})

export const setPasswordText = (password) => ( {
    type : SIGN_IN_CHANGE_PASSWORD,
    payload : password
})
 
export const actionPending = () => (  {
     type: SET_STATUS, 
     status: 'PENDING'
} )
export const actionResolved = ( token ) => ( { 
    type: SET_STATUS, 
    status: 'RESOLVEDwehuwhe', 
    payload : token,
    error: null 
})
export const actionRejected = ( error ) => ( { 
    type: SET_STATUS, 
    status: 'REJECTED', 
    payload : null, 
    error  
})

// Thunk wrap 

export  function signIn (email, password){
    return async dispatch => {
        dispatch(actionPending())
        console.log('Sign in otrabativaet',email, password);
        if((email === "" && password === "") || (email === "")||(password ==="") ){
            dispatch(actionRejected("Email and password values are empty!"));
        }
        else{
            console.log('Hashed password : ', password);
            var data =  await( await fetch('http://localhost:4000/signin',{
                headers : {
                    'Content-Type':"application/json",
                    'Accept' :'application/json'
                },
                method : 'POST',
                body : JSON.stringify({email, password})
            })).json()
            console.log(data)
            if(data.token){
                console.log("Sjdishdh")
                dispatch(actionResolved(data.token))
                localStorage.setItem("userToken", data.token );
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
}
