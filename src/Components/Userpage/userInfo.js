import React, { Component } from "react";
import ChangeAvatar from "./userUpdateAvatar.js";
import {getUser} from "../../Store/UserPage/actions";
import {Divider, Space, Form, Input, Button} from "antd";
import { connect } from "react-redux";
import Basicpage from "../Basicpage/index";
import { setAvatar, sendAvatar } from "../../Store/ChangeUserAvatar/actions.js"


class UserInfo extends Component{
    constructor(){
        super();
        this.changeOldPassword = this.changeOldPassword.bind(this);
        this.newPasswordChange = this.newPasswordChange.bind(this);
        this.newPassordCheckChange = this.newPassordCheckChange.bind(this);
        this.submitNewPassword = this.submitNewPassword.bind(this);
    }

    componentDidMount(){
        console.log("FUNC CALL");
        let token = localStorage.getItem("userToken");
        console.log("TOKEN : ", token);
        this.props.getUser(token);
    }

    changeOldPassword(event){
        this.props.setOldPassword(event.target.value);
    }
    newPasswordChange(event){
        this.props.setNewPasswordFF(event.target.value)
    }
    newPassordCheckChange(event){
        this.props.setNewPasswordSF(event.target.value);
    }
    submitNewPassword(event){
        event.preventDefault(); 
        
    }
    render(){
        return(
           <>
                <div className="user-page-header">
                    <h1>User page</h1>
                    <Button type="ghost"> Log out </Button> 
                </div>
                <Divider/>
                <Space direction="horizontal" size="large">
                    <Space direction="vertical"> 
                    {this.props.status === "Resolved" ?
                        <> 
                            <h3> User info </h3>
                            <h2> Name : {this.props.payload.name}</h2>  
                            <h2> E-mail : {this.props.payload.email}</h2>
                            <h2> Registered : {this.props.payload.date} </h2>
                        </> 
                        : <h1> Loading...</h1>}
                        </Space>

                        <Divider type="vertical"/>

                        <Space direction="vertical"> 
                            <h3> Change password </h3>
                            <Form> 
                                <Form.Item >
                                    <Input.Password size="large" placeholder="Old password" value={this.props.oldPassword} onChange={this.changeOldPassword}/>    
                                </Form.Item> 
                                <Form.Item >
                                    <Input.Password  size="large" placeholder="New password" value={this.props.newPassord} onChange={this.newPasswordChange}/>    
                                </Form.Item> 
                                <Form.Item >
                                    <Input.Password  size="large" placeholder="New password again" value={this.props.newPassordCheckChange} onChange={this.newPassordCheckChange} />    
                                </Form.Item> 
                                <Form.Item> 
                                    <Button type="primary" onClick={this.submitNewPassword}> Change password</Button>
                                </Form.Item>
                            </Form>
                        </Space>
                    </Space>
                <Divider/>
                {/*
                <h3> Change user avatar </h3>
                <ChangeAvatar
                       // values
                    userNewAvatar={this.props.userNewAvatar}
                    newAvatarLoad={this.props.newAvatarLoad}
                    newAvatarError={this.props.newAvatarError}
                    newAvatarStatus={this.props.newAvatarStatus}
                      // functions 
                    setAvatar={this.props.setAvatar}
                    sendNewAvatar={this.props.sendAvatar}
                />
                */}
            </>
        )
    }
}


export default UserInfo; 