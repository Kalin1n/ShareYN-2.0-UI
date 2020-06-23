import React, { Component } from "react";
import BasicPage from "../Basicpage/index.js";

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
        let data = await ( await fetch(`http://localhost:4000/article/${url}`)).json();
        console.log("Data from server : ",data);
        this.setState({loaded : true, article: data.article.text })
        console.log(this.state)
    }

    render(){
        return(
            <BasicPage>
                <article>

                </article>
            </BasicPage>
        )
    }
};

export default ArticlePageContainer;