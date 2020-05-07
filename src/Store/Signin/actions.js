
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
     status: 'PENDING', 
     payload: null, 
     error: null 
} )
export const actionResolved = ( payload ) => ( { 
    type: SET_STATUS, 
    status: 'RESOLVED', 
    payload ,
    error: null 
})
export const actionRejected = ( error ) => ( { 
    type: SET_STATUS, 
    status: 'REJECTED', 
    payload: null, 
    error  
})

// Thunk wrap 

export  function signIn (email, password){
    return async dispatch => {
        dispatch(actionPending())
        console.log('Sign in otrabativaet',email, password);
           var data =  await( await fetch('http://localhost:4000/signin',{
                headers : {
                    'Content-Type':"application/json",
                    'Accept' :'application/json'
                },
                method : 'POST',
                body : JSON.stringify({email, password})
            })).json()
           if(!!data.signIn){
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
