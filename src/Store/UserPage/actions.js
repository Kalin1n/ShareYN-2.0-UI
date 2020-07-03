import config from "../../config";
import { getUserReducer } from "./reducer";
export const USERPAGE_STATUS = "USERPAGE_STATUS";

const getUserPending = () => ({
    type : USERPAGE_STATUS, 
    status : "Pending"
}); 

const getUserResolved = (response) =>({
    type : USERPAGE_STATUS, 
    status : "Resolved",
    payload : response,
    error : null
}); 

const getUserRejected = (error) =>({
    type : USERPAGE_STATUS, 
    status : "Rejected", 
    payload : error, 
    error
});

export function getUser(userToken){
    return async dispatch =>{
        dispatch(getUserPending());
        console.log("Token to find user : ", userToken);
        var response = await (await fetch("http://localhost:4000/get-user", { 
            method : "GET", 
            headers : { 
                'Authorization':'Bearer '+userToken
            }
        })).json();
        console.log("Response : ", response);
        if(response.status === 200){ 
            dispatch(getUserResolved(response))
        }else{ 
            dispatch(getUserRejected("Error"));
        }
    };
};