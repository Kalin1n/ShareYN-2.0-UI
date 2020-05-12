import React, {Component} from "react";
import { Button, Box, Anchor } from "grommet";
import BasicPage from "../Basicpage/index.js";


class ArticlesListContainer extends Component{
    render(){
        return(
            <BasicPage>
                <Box>
                    <h1> Articles </h1>
                    <Button> <Anchor href="/write">Create new article</Anchor> </Button>
                </Box>
            </BasicPage>
        )
    }
}

export default ArticlesListContainer;