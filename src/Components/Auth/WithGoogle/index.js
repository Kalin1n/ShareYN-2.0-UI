import React from "react";

import GoogleLogin from "react-google-login";

const responseGoogle = ( response ) => {
    console.log(response)
}

function SignInWithGoogle(){
    return(
        <>
            <GoogleLogin
                buttonText="Sign in with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </>
    )
}

export default SignInWithGoogle;