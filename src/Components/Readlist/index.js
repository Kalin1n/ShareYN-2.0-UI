import React, {Component} from "react";

import BasicPage from "../Basicpage/index.js";
import { Link } from "react-router-dom";
import { Row, Button, Col } from "antd";


const style = { border: '#0092ff', padding: '8px 0', };

class ArticlesListContainer extends Component{
    constructor(){
        super();
        this.state = { 
            articles : [],
            payload : false
        }
    }

    async componentDidMount(){
        var response = await ( await fetch("http://localhost:4000/all-articles", {
            method : "GET"
        })).json();
        console.log("DATA", response)
        if (response){
            this.setState({articles : response.data, payload : true});
        }
    }

    render(){
        let root = this.props.match.url;
        console.log("Root url : ", root);
        return(
            <BasicPage>
                <h1> Articles </h1>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {this.state.payload === false ? 
                                <h1> No data </h1> 
                                : this.state.articles.map( 
                                        (artcl)=> 
                                    <Col lassName="gutter-row" span={6}> 
                                        <div style={style}>
                                            <Link to={{pathname : `${root}/${artcl.title}}`}}>{artcl.title}</Link>
                                        </div>
                                    </Col>)}
                </Row>
                    <Button type="link"> <Link to="/write">Create new article</Link> </Button>
                    
            </BasicPage>
        )
    }
}

export default ArticlesListContainer;