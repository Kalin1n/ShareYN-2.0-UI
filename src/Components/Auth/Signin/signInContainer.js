import React, { Component } from "react";
import SignInForm from "./index.js";
import { connect } from "react-redux";

import { setEmailText, setPasswordText, signIn} from "../../../Store/Signin/actions.js"

class SignInContainer extends Component{
    render(){
        return(
            <SignInForm
                email={this.props.email}
                password={this.props.password}
                error={this.props.error}
                payload={this.props.payload}
                status={this.props.status}

                changeEmail={this.props.setEmailText}
                changePassword={this.props.setPasswordText}
                signIn={this.props.signIn}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        email : state.signIn.email,
        password : state.signIn.password,
        error : state.signIn.error,
        payload : state.signIn.payload,
        status : state.signIn.status
    }
}

const mapDispatchToProps = {
    setEmailText, 
    setPasswordText,
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);