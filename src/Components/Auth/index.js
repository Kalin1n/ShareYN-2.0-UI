import React from "react";
import SigninForm from "./Signin/index.js"
import RegisterForm from "./Register/index.js"
function Authpage(){
    return(
        <div>
            <h1> Authentication </h1> 
            <div> 
                <SigninForm/>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default Authpage;