import React, { Component } from "react";

class RegisterForm extends Component{
    render(){
        return(
            <div>
                <h1>Registration</h1> 
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="password again"/>
                </form>
                <button> Register </button>
            </div>
        )
    }
}

export default RegisterForm;