import React from "react";
import {FaHighlighter} from "react-icons/fa";
import { Grommet, Nav, Header, grommet, Box, Anchor } from "grommet";

const items = [
    {label : "Authentification", href:"/auth"},
    {label : "User page", href:"/user"}, 
    {label : "Articles", href:"/read"}
];

function Navigation(){
    return(
        <Grommet theme={grommet}>
            <Header background="dark-1" pad="medium">
                <Box direction="row" align="center" gap="small">    
                    <Anchor color="white" href="/">
                        Share YN 2.0
                    </Anchor>
                    <FaHighlighter/>
                </Box>
                <Nav direction="row">
                    {items.map( item => (
                        <Anchor href={item.href} label={item.label}></Anchor> 
                    ))}
                </Nav>
            </Header>
        </Grommet>
    )
}

export default Navigation;