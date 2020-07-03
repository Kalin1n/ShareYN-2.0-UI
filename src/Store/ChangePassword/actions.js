import config from "../../config";

export const oldPasswordChange = "oldPasswordChange"; 
export const newPasswordFFchange = "newPasswordFFchange";
export const newPasswordSFchange = "newPasswordSFchange"; 
export const newPasswordStatus = "newPasswordStatus";


export const setOldPassword = (oldPassword) => ({
    type : oldPasswordChange, 
    payload : oldPassword
});

export const setNewPasswordFF = (newPassword) => ({
    type : newPasswordFFchange, 
    payload : newPassword
}); 

export const setNewPasswordSF = (newPasswordSecond) => ({
    type : newPasswordSFchange,
    payload : newPasswordSecond
});

const newPasswordPending = () => ({
    type : newPasswordStatus, 
    status : "Pending", 
});

const newPasswordResolved = ( payload) => ({
    type : newPasswordStatus, 
    status : "Resolved", 
    payload, 
    error : null
})

const newPasswordRejected = (error ) => ({
    type : newPasswordStatus, 
    status : "Rejected", 
    payload : null, 
    error
});

async function changePassword(){
    // TO WRITE 
};  