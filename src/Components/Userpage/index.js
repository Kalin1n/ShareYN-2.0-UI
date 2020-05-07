import React, { Component } from "react";

class UserAvatar extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFile : null,
            loaded : false
        }
        this.fileAdd = this.fileAdd.bind(this);
        this.sendFile = this.sendFile.bind(this);
    }
    async fileAdd(event){
        await this.setState({selectedFile : event.target.files[0], loaded : true});
        console.log("State : ",this.state)
    }
    sendFile(event){
        event.preventDefault();
        let data = new FormData();
        data.append('file', this.state.selectedFile);
        console.log("Data : ", data);
        fetch("http://localhost:4000/add-avatar", {
            method : "POST",    
            body : data
        });
    }
    render(){
        return(
            <div>
                <input type="file" onChange={this.fileAdd}/>
                <button onClick={this.sendFile}> Send ! </button>
            </div>
        )
    }
}

export default UserAvatar;