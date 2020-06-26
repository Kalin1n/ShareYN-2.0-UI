import React, { Component } from "react";
import config from "../../config";
import ReactMarkdown from "react-markdown";
import {Typography} from "antd";
import BasicPage from "../Basicpage/index.js";

const {Title} = Typography;

class ArticlePageContainer extends Component{
    constructor(){
        super();

        this.state = { 
            loaded : false, 
            article : ""
        }
    }

    async componentDidMount(){
        let url = this.props.match.params.article_title;
        console.log(url)
        let data = await ( await fetch(config.host+"article/"+this.props.match.params.article_title.trim("}"))).json();
        console.log("Data from server : ",data);
        this.setState({loaded : true, article: data.article})
        console.log(this.state)
    }

    render(){
        return(
            <BasicPage>
                <article>
        {this.state.loaded == false ? <p>Loading</p> :<><Title>{this.state.article.title}</Title> <ReactMarkdown source={this.state.article.text} /></>}
                </article>
            </BasicPage>
        )
    }
};

export default ArticlePageContainer;