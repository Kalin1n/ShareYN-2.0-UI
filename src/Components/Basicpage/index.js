import React from "react";
import Navigation from "../Navigation/navigation.js";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { Box, Main, Footer, Anchor } from "grommet";

const Media = () =>(
    <Box direction="row" gap="xxxsmall" justify="center">  
        <Anchor
            href="https://github.com/Kalin1n"
            icon={<FaGithub/>}
        />
        <Anchor
            href="https://www.linkedin.com/in/ivan-kalinin-293127188/"
            icon={<FaLinkedin/>}
        />
        <Anchor 
            href="https://www.instagram.com/kalininivan05/"
            icon={<FaInstagram/>}
        />
    </Box>
);

function Basicpage(props){
    return(
        <>
            <Navigation/>
            <Box>
                <Main>
                    {props.children}
                </Main>
            </Box>
            <Footer background="light-4" pad="small">
                <Box align="center" direction="row" gap="xsmall"> 
                    <h3>Share YN 2.0</h3>
                </Box>
                <Media/>
                <h4>Kalinin Ivan 2020</h4>
            </Footer>
        </>
    )
}

export default Basicpage;