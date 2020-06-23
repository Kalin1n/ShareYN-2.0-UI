import React, { Component } from 'react';
import {Form, Input, Button, Checkbox, Typography, Result} from "antd";
const {Title} = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

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
            <>
                <Title>Sign In </Title>
                <Form {...layout}> 
                    <Form.Item label="Email">
                        <Input type="email" value={this.props.email} onChange={this.changeEmail} placeholder="Email"/>
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input type="password" value={this.props.password} onChange={this.changePassword} placeholder="Password"/>
                    </Form.Item>
                    <Form.Item label="Submit">
                        <Button type="primary"onClick={this.signIn}> Sign In </Button>
                            {this.props.status === "REJECTED" ? <Result>{this.props.error}</Result> : <> </> }
                            {this.props.status === "RESOLVED" ? <Result status="success" title="User loged in!"/> :<></>}
                    </Form.Item>
                </Form>
             </>
        )
    }
}

export default SigninForm;