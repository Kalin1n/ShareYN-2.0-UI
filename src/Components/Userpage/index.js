import React, { Component } from "react";
import ChangeAvatar from "./userUpdateAvatar.js";
import {getUser} from "../../Store/UserPage/actions";
import {Divider, Space, Form} from "antd";
import { connect } from "react-redux";
import Basicpage from "../Basicpage/index";
import { setAvatar, sendAvatar } from "../../Store/ChangeUserAvatar/actions.js"


class UserPage extends Component{
    componentDidMount(){
        console.log("FUNC CALL");
        let token = localStorage.getItem("userToken");
        console.log("TOKEN : ", token);
        this.props.getUser(token);
    }

    render(){
        return(
            <Basicpage>
                <h1>User page</h1>

                <Divider/>
                <Space direction="horizontal" size="large">
                    <Space direction="vertical"> 
            {this.props.status === "Resolved" ?
                        <> 
                            
                            <h2> Name : {this.props.payload.name}</h2>  
                            <h2> E-mail : {this.props.payload.email}</h2>
                            <h2> Registered : {this.props.payload.date} </h2>
                        </> 
                        : <h1> Loading...</h1>}
                        </Space>
                        <Divider type="vertical"/>
                        <Space direction="vertical"> 
                           
                        </Space>
                    </Space>
                <Divider/>
                
                {/*
                <ChangeAvatar
                       // values
                    userNewAvatar={this.props.userNewAvatar}
                    newAvatarLoad={this.props.newAvatarLoad}
                    newAvatarError={this.props.newAvatarError}
                    newAvatarStatus={this.props.newAvatarStatus}
                      // functions 
                    setAvatar={this.props.setAvatar}
                    sendNewAvatar={this.props.sendAvatar}
                />*/}
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
        newAvatarStatus : state.changeAvatar.status 

    }
}

const mapDispatchToProps = {
    setAvatar,
    sendAvatar,
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage); 