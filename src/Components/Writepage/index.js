import React, { Component } from 'react';

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "./styles.css"
import "react-mde/lib/styles/css/react-mde-all.css";
import {Result} from "antd"
import { TextInput, Button } from 'grommet';
//import { Button, Box, TextInput } from 'grommet';




  
class WritePageEditor extends Component{
  constructor (props) {
    super(props);
    this.state = {
      value: "**Hello world!!!**",
      tab : "write",
      title : ''
    };

    this.converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
      });
      this.handleTabChange = this.handleTabChange.bind(this);
      this.titleChange = this.titleChange.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.sendArtilce = this.sendArtilce.bind(this)
    }
    
    handleValueChange = (value) => {
      this.props.setNewArticleText(value);
    };

    handleTabChange = (tab) =>  {
      console.log("sdsdsd",tab)
      this.setState({tab : tab});
    }

    titleChange(event){
      this.props.setNewArticleTitle(event.target.value)
    }

    sendArtilce(event){
      event.preventDefault();
      console.log("To Send ", this.state, localStorage.getItem("userToken"));
      this.props.createNewArticle( localStorage.getItem("userToken"), this.props.title, this.props.text);
    }
    
    render () {
      return (
        <div className="container">
          <TextInput value={this.props.title} onChange={this.titleChange}/>
          <ReactMde
            onChange={this.handleValueChange}
            value={this.props.text}
            selectedTab={this.state.tab}
            onTabChange={this.handleTabChange}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))
            }
          />
          <Button onClick={this.sendArtilce}>Send Artilce</Button> 
          {this.props.status === "Pending"?<h1>Loading...</h1> : this.props.status==="Resolved"? <Result status="success" title="Article created"/> : this.props.status === "empty"?<></>:<Result status="warning" title="Some error during saving new article  "/> }
        </div>
      );
    }
}

export default WritePageEditor;