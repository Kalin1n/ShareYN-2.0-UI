import React from "react";
import Basicpage from "../Basicpage/index.js";
import SigninContainer from "./Signin/signInContainer.js"
import RegisterContainer from "./Register/registerContainer.js"
import { Box, Grid, Grommet, grommet } from "grommet";


function Authpage(){
    return(
        <Basicpage>
            <Grommet theme={grommet}>
                <Grid columns={{count : 2, size :"auto"}} gap="small">
                        <Box overflow="auto" align="center" justify="center" height="medium"> 
                            <SigninContainer/>
                        </Box>
                        <Box align="center" justify="center" width="medium" >
                            <RegisterContainer/>
                        </Box>
                </Grid>
            </Grommet>
        </Basicpage>
    )
}


export default Authpage;