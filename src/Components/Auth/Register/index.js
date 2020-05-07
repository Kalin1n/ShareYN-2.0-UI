import React, { Component } from "react";

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.nicknameChange = this.nicknameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordCheckChange = this.passwordCheckChange.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
    }

    nameChange(event){
        this.props.setNameText(event.target.value);
    }

    emailChange(event){
        this.props.setEmailText(event.target.value);
    }

    nicknameChange(event){
        this.props.setNicknameText(event.target.value);
    }

    passwordChange(event){
        this.props.setPasswordText(event.target.value);
    }

    passwordCheckChange(event){
        this.props.setPasswordCheckText(event.target.value);
    }

    sendRequest(event){
        event.preventDefault()
        this.props.changeError(null)
        if( this.props.password !== this.props.passwordCheck){
            console.log("Passwords not matching ")
            this.props.changeError("Passwords not matching")
            return;
        }
        else{
            console.log("name : ", this.props.name, " email : ", this.props.email, " nickname : ", this.props.nickname)
            this.props.register(this.props.name, this.props.email, this.props.nickname, this.props.password);
        }

    }

    render(){
        return(
            <div>
                <h1>Registration</h1> 
                <form>
                    <input type="name" placeholder="Name" value={this.props.name} onChange={this.nameChange}/>
                    <input type="email" placeholder="Email" value={this.props.email} onChange={this.emailChange}/>
                    <input type="text" placeholder="Nickname" value={this.props.nickname} onChange={this.nicknameChange}/>
                    <input type="password" placeholder="password" value={this.props.password} onChange={this.passwordChange}/>
                    <input type="password" placeholder="password again" value={this.props.passwordCheck} onChange={this.passwordCheckChange}/>
                </form>
                <button onClick={this.sendRequest}> Register </button>
            </div>
        )
    }
}

export default RegisterForm;