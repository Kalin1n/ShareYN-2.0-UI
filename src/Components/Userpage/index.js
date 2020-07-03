import React, { Component } from "react";
import ChangeAvatar from "./userUpdateAvatar.js";
import {getUser} from "../../Store/UserPage/actions";
import {Divider, Space, Form, Input, Button} from "antd";
import UserInfo from "./userInfo";
import { connect } from "react-redux";
import Basicpage from "../Basicpage/index";
import { setAvatar, sendAvatar } from "../../Store/ChangeUserAvatar/actions.js";
import {setOldPassword, setNewPasswordFF, setNewPasswordSF } from "../../Store/ChangePassword/actions.js";


class UserPage extends Component{
   
    render(){
        return(
            <Basicpage>
                <UserInfo 
                    status={this.props.status}
                    payload={this.props.payload}
                    oldPassword={this.props.oldPassword}
                    newPassword={this.props.newPassword}
                    newPasswordCheck={this.props.newPasswordCheck}

                    getUser={this.props.getUser}
                    setOldPassword={this.props.setOldPassword}
                    setNewPasswordFF={this.props.setNewPasswordFF}
                    setNewPasswordSF={this.props.setNewPasswordSF}
                />
            </Basicpage>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        // BASIC USER PAGE PROPS 
        status : state.userPage.status,
        payload : state.userPage.payload,
        // UPLOAD AVATAR PROPS 
        userNewAvatar : state.changeAvatar.newFile,
        newAvatarError : state.changeAvatar.error, 
        newAvatarLoad : state.changeAvatar.loaded,
        newAvatarStatus : state.changeAvatar.status,
        // NEW PASSWORD PROPS 
        oldPassword : state.changePassword.oldPassword,
        newPassword : state.changePassword.newPassword,
        newPasswordCheck : state.changePassword.newPasswordSF
    }
}

const mapDispatchToProps = {
    setAvatar,
    sendAvatar,
    getUser,
    setOldPassword, 
    setNewPasswordFF, 
    setNewPasswordSF
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage); 