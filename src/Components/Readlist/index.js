import React, {Component} from "react";
import { Button, Box, Anchor } from "grommet";
import BasicPage from "../Basicpage/index.js";


class ArticlesListContainer extends Component{
    constructor(){
        super();
        this.state = { 
            articles : [],
            payload : false
        }
    }

    async componentDidMount(){
        var data = await ( await fetch("http://localhost:4000/all-articles", {
            method : "GET"
        })).json();
        console.log("DATA",data)
        if (data){
            this.setState({articles : data.articles, payload : true});
        }
    }

    render(){
        return(
            <BasicPage>
                <Box>
                    <h1> Articles </h1>
                    <div>
                        <ul>
                            {this.state.payload === false ? <h1> No data </h1> : this.state.articles.map( (artcl)=> <li> {artcl.title} </li>)}
                        </ul>
                    </div>
                    <Button> <Anchor href="/write">Create new article</Anchor> </Button>
                </Box>
            </BasicPage>
        )
    }
}

export default ArticlesListContainer;