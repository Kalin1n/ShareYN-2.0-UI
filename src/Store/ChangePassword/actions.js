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

export function changePassword(oldPassword, newPassword, newPasswordCheck){
    return async dispatch => { 
        dispatch(newPasswordPending());
        var token = localStorage.getItem("userToken");
        if(oldPassword === "" && newPassword === "" && newPasswordCheck === ""){ 
            console.log("PUSTO ");
            return;
        }
        else if (newPassword === newPasswordCheck){
            var data = await ( await fetch("http://localhost:4000/set-password", { 
                            method : "PUT",
                            headers : { 
                                Authorization : "Bearer "+token
                            },
                            body: { 
                                oldPassword, 
                                newPassword
                            }
                        }
                    )
                ).json();
                console.log("Response : ", data);
        };
    };
};  