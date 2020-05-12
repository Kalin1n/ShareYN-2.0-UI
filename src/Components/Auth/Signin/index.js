import React, { Component } from 'react';
import { Grommet, grommet, Box, Form, TextInput, FormField, Button, Heading, Text } from "grommet";

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
        console.log("Email : ",this.props.email, "Password  : ", this.props.password);
        this.props.signIn(this.props.email, this.props.password);
    }

    render(){
        return(
            <Grommet theme={grommet}>
                <Box width="medium" gap="medium" height="medium" >
                    <Heading> Sign in </Heading>
                    <Form> 
                        <FormField>
                            <TextInput type="email" value={this.props.email} onChange={this.changeEmail} placeholder="Email"/>
                        </FormField>
                        <FormField>
                            <TextInput type="password" value={this.props.password} onChange={this.changePassword} placeholder="Password"/>
                        </FormField>
                    </Form>
                    <Button primary size="medium" label="Sign In" onClick={this.signIn}/>
                    { this.props.status === "REJECTED" ? <Text>{this.props.error}</Text> : <> </> }
                    {this.props.status === "RESOLVED" ? <Text>User loged in!</Text>:<></>}
                </Box>
            </Grommet>
        )
    }
}

export default SigninForm;