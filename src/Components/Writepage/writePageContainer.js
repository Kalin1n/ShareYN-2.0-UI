import React, {Component} from 'react';
import BasicPage from "../Basicpage/index.js";
import { connect } from "react-redux";
import { setNewArticleText, setNewArticleTitle, createNewArticle} from "../../Store/ArticleNew/actions.js";
import WritePageEditor from "./index.js"

class WritePageContainer extends Component{
    render(){
        return(
            <BasicPage>
                <WritePageEditor
                    createNewArticle={this.props.createNewArticle}
                    setNewArticleText={this.props.setNewArticleText}
                    setNewArticleTitle={this.props.setNewArticleTitle}
                    title={this.props.title}
                    text={this.props.text}
                    status={this.props.status}
                />
            </BasicPage>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        title : state.newArticleReducer.title,
        text : state.newArticleReducer.text,
        status : state.newArticleReducer.status,
    }
}
 
const mapDispathToProps = {
    setNewArticleText,
    setNewArticleTitle,
    createNewArticle
}

export default connect(mapStateToProps, mapDispathToProps)(WritePageContainer);