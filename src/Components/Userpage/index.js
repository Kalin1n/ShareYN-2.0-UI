import React, { Component } from "react";
import ChangeAvatar from "./userUpdateAvatar.js";
import { connect } from "react-redux";
import Basicpage from "../Basicpage/index";
import { setAvatar, sendAvatar } from "../../Store/ChangeUserAvatar/actions.js"

class UserPage extends Component{
    render(){
        return(
            <Basicpage>
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
            </Basicpage>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        userNewAvatar : state.changeAvatar.newFile,
        newAvatarError : state.changeAvatar.error, 
        newAvatarLoad : state.changeAvatar.loaded,
        newAvatarStatus : state.changeAvatar.status
    }
}

const mapDispatchToProps = {
    setAvatar,
    sendAvatar
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage); 