import React, { Component } from 'react';

import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "./styles.css"
import "react-mde/lib/styles/css/react-mde-all.css";
//import { Button, Box, TextInput } from 'grommet';




  
class WritePageEditor extends Component{
    constructor (props) {
        super(props);
        this.state = {
          value: "**Hello world!!!**",
          tab : "write"
        };
        this.converter = new Showdown.Converter({
          tables: true,
          simplifiedAutoLink: true,
          strikethrough: true,
          tasklists: true
        });
      }
    
      handleValueChange = (value) => {
        this.setState({ value });
      };

      handleTabChange = (tab) =>  {
            console.log("sdsdsd",tab)
            this.setState({tab : tab});
      }
    
      render () {
        return (
          <div className="container">
            <ReactMde
              onChange={this.handleValueChange}
              value={this.state.value}
              selectedTab={this.state.tab}
              onTabChange={this.handleTabChange}

              generateMarkdownPreview={markdown =>
                Promise.resolve(this.converter.makeHtml(markdown))
              }
            />
          </div>
        );
      }
}

export default WritePageEditor;