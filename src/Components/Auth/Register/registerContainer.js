import React, { Component } from "react";
import RegisterForm from "./index.js";
import { connect } from "react-redux";

import { setNameText, setEmailText, setNicknameText, setPasswordChangeText, setPasswordText, errorChange, register } from "../../../Store/Register/actions.js"

class RegiserContainer extends Component{
    render(){
        return(
            <RegisterForm
                name={this.props.name}
                email={this.props.email}
                password={this.props.password}
                passwordCheck={this.props.passwordCheck}
                nickname={this.props.nickname}
                error={this.props.error}

                setEmailText={this.props.setEmailText}
                setNameText={this.props.setNameText}
                setNicknameText={this.props.setNicknameText}
                setPasswordText={this.props.setPasswordText}
                setPasswordCheckText={this.props.setPasswordChangeText}
                changeError={this.props.errorChange}
                register={this.props.register}
            />
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        name : state.register.name,
        email : state.register.email,
        password : state.register.password,
        passwordCheck : state.register.passwordCheck,
        nickname : state.register.nickname, 
        error : state.register.error    
    }
}

const mapDispatchToProps = {
    setNameText,
    setEmailText,
    setNicknameText,
    setPasswordChangeText,
    setPasswordText,
    errorChange, 
    register
}



export default connect(mapStateToProps, mapDispatchToProps) (RegiserContainer);