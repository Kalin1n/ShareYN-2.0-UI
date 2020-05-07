import React, { Component } from 'react';

class SigninForm extends Component{
    constructor(props){
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signIn = this.signIn.bind(this); 
    }

    changeEmail(event){
        this.props.changeEmail(event.target.value);
    }

    changePassword(event){
        this.props.changePassword(event.target.value);
    }

    signIn(event){
        event.preventDefault();
        if(this.props.email && this.props.password){
            console.log("Email : ",this.props.email, "Password  : ", this.props.password);
            this.props.signIn(this.props.email, this.props.password);
        }
        else{
            console.log("No value")
        }
    }

    render(){
        return(
        <div>
            <form>
                <input type="email" value={this.props.email} onChange={this.changeEmail} placeholder="Email"/>
                <input type="password" value={this.props.password} onChange={this.changePassword} placeholder="Password"/>
            </form>
            <button onClick={this.signIn}> Sign in </button>
        </div> 
        )
    }
}

export default SigninForm;