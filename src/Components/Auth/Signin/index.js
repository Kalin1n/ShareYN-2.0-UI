import React, { Component } from 'react';

class SigninForm extends Component{
    
    render(){
        return(
        <div>
            <form>
                <input type="email"/>
                <input type="password"/>
            </form>
            <button> Sign in </button>
        </div> 
        )
    }
}

export default SigninForm;