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
        var response = await (await fetch("http://localhost:4000/create-article", { 
            method : "POST",
            headers : {
                "Authorization" : `Bearer `+userToken
            },
            body : JSON.stringify({ 
                title, 
                text
            }).json()
        }))
        console.log(response)

    }
}