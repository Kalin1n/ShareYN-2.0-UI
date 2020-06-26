export const AVATAR_CHANGE = "AVATAR_CHANGE";
export const SET_NEW_AVATAR_STATUS = "SET_NEW_AVATAR_STATUS"; 

export const setAvatar = ( file ) => ({
    type : AVATAR_CHANGE,
    file
});

export const newAvatarPending = () =>({
    type : SET_NEW_AVATAR_STATUS,
    status : "pending",
    payload : null,
    error : null
})

export const newAvatarResolved = ( data ) =>({
    type : SET_NEW_AVATAR_STATUS,
    status : "resolved",
    payload : data,
    error : null
})

export const newAvatarRejected = (error) =>({
    type : SET_NEW_AVATAR_STATUS,
    status : "rejected",
    payload : null,
    error
})

export function sendAvatar(file){
    return async dispatch => {
        dispatch(newAvatarPending())
        console.log("NEW AVATAR SENDING ")
        var fileToSend = new FormData();
        fileToSend.append('file', file)
        var data = await ( await fetch("http://localhost:4000/add-avatar", 
            {
                method : "POST",
                body : fileToSend
            }
        )).json();
        console.log(data);
        if(data.loaded === false){
            dispatch(newAvatarRejected("Error occured"));
        }
        dispatch(newAvatarResolved(true))
    }
}