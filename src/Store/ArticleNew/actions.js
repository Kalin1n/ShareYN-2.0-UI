import config from "../../config";
export const NEW_ARTICLE_TITLE = "NEW_ARTICLE_TITLE";
export const NEW_ARTICLE_TEXT = "NEW_ARTICLE_TEXT";
export const NEW_ARTICLE_STATUS = "NEW_ARTICLE_STATUS";
export const SEND_NEW_ARTICLE = "SEND_NEW_ARTICLE";


export const setNewArticleTitle = ( title ) =>({
    type : NEW_ARTICLE_TITLE,
    payload : title 
});

export const setNewArticleText = ( text ) =>({
    type : NEW_ARTICLE_TEXT,
    payload : text
});

const newArticlePending = () => ({
    type : NEW_ARTICLE_STATUS,
    status : "Pending"
});

const newArticleResolved = (response) =>({
    type : NEW_ARTICLE_STATUS,
    status : "Resolved",
    payload : response, 
    error : null
});

const newArticleRejected = ( error ) =>({
    type : NEW_ARTICLE_STATUS,
    status : "Rejected", 
    error 
});

export function createNewArticle (userToken, title, text){
    return async dispatch => {
        dispatch( newArticlePending())
        console.log("Data to send ", userToken, title, text);
        var response = await (await fetch(config.host+"create-article" /*"http://localhost:4000/create-article"*/, { 
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ 
                title : title, 
                text: text, 
                token : userToken
            }),
            method : "POST"
        })).json();
        if(response.status === 200){ 
            dispatch(newArticleResolved(response));
        }
        else{ 
            dispatch(newArticleRejected(response));
        }

    }
}