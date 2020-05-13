import { NEW_ARTICLE_STATUS, NEW_ARTICLE_TEXT, SEND_NEW_ARTICLE, NEW_ARTICLE_TITLE} from "./actions.js";

const defaultState = { 
    title : "", 
    text : "", 
    status : "empty",
    payload : null,
    error : null
}

export const newArticleReducer = ( state = defaultState, action ) => {
    switch(action.type){
        case NEW_ARTICLE_TEXT:
            return {...state, text : action.payload }
        case NEW_ARTICLE_TITLE:
            return {...state, title : action.payload}
        case NEW_ARTICLE_STATUS: 
            return {...state, status : action.status, payload : action.payload, error : action.error}
        case SEND_NEW_ARTICLE:
            return {...state, status : action.status}
        default : 
            return state
    }
}