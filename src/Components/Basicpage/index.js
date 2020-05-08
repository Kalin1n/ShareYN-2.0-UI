import React from "react";
import Navigation from "../Navigation/navigation.js";
import { Box, Main } from "grommet";
function Basicpage(props){
    return(
        <>
            <Navigation/>
            <Box>
                <Main>
                    {props.children}
                </Main>
            </Box>
        </>
    )
}

export default Basicpage;