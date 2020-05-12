import React from 'react';
import BasicPage from "../Basicpage/index.js";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "./styles.css"
import "react-mde/lib/styles/css/react-mde-all.css";
import { Button, Box } from 'grommet';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});
  
function WritePageContainer (){
    const [value, setValue] = React.useState("**Write your article**");
    const [selectedTab, setSelectedTab] = React.useState("write");
    return(
        <BasicPage>
            <h1> Tiem to write something new </h1>
            <div className="container"> 
                <ReactMde 
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </div>
            <Box width="small" height="small">
                <Button primary align="center">
                    Create Article 
                </Button>
            </Box>
        </BasicPage>
    )
}

export default WritePageContainer;