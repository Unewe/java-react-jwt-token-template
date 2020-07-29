import {LOAD_CATEGORIES} from "../action";

const categories = (state = [], action) => {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default categories