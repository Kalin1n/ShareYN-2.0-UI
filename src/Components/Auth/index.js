import React from "react";
import SigninContainer from "./Signin/signInContainer.js"
import RegisterContainer from "./Register/registerContainer.js"

function Authpage(){
    return(
        <div>
            <h1> Authentication </h1> 
            <div> 
                <SigninContainer/>
                <RegisterContainer/>
            </div>
        </div>
    )
}


export default Authpage;