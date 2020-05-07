import React, { Component } from "react";

class UserAvatar extends Component{
    constructor(props){
        super(props);
        this.fileAdd = this.fileAdd.bind(this);
        this.sendFile = this.sendFile.bind(this);
    }
    async fileAdd(event){
        await this.props.setAvatar(event.target.files[0]); 
    }
    sendFile(event){
        event.preventDefault();
        this.props.sendNewAvatar(this.props.userNewAvatar)
    }
    render(){
        return(
            <div>
                <input type="file" onChange={this.fileAdd} />
                <br/>
                <button onClick={this.sendFile}> Send ! </button>
                { 
                
                this.props.newAvatarStatus === "resolved" ? 
                    <h1> Upload done !</h1>
                    : 
                    this.props.newAvatarStatus === ""? 
                    <></>
                    :<h1> Error </h1>
                }
            </div>
        )
    }
}

export default UserAvatar;