import {SET_ARTICLE} from "../action";

class Article {
    name = "Название..."
    description = "Описание для поста."

}

const article = (state = new Article(), action) => {
    switch (action.type) {
        case SET_ARTICLE:
            return {...state, article: action.payload}
        default:
            return state
    }
}

export default article