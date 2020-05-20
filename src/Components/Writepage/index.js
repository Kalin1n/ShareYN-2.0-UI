import React, { Component } from 'react';

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "./styles.css"
import "react-mde/lib/styles/css/react-mde-all.css";
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
      this.setState({ value });
    };

    handleTabChange = (tab) =>  {
      console.log("sdsdsd",tab)
      this.setState({tab : tab});
    }

    titleChange(event){
      this.setState({title : event.target.value})
    }

    sendArtilce(event){
      event.preventDefault();

      console.log("To Send ", this.state, localStorage.getItem("userToken"));
      this.props.createNewArticle( localStorage.getItem("userToken"), this.state.title, this.state.value);
    }
    
    render () {
      return (
        <div className="container">
          <TextInput value={this.state.title} onChange={this.titleChange}/>
          <ReactMde
            onChange={this.handleValueChange}
            value={this.state.value}
            selectedTab={this.state.tab}
            onTabChange={this.handleTabChange}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))
            }
          />
          <Button onClick={this.sendArtilce}>Send Artilce</Button> 
        </div>
      );
    }
}

export default WritePageEditor;