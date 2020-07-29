import {LOGIN, LOGOUT, SET_USER} from "../action"
import {ACCESS_TOKEN} from "../../constant";

const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action, "TOKEN")
            localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
            return state
        case SET_USER:
            return {...action.payload}
        case LOGOUT:
            localStorage.removeItem(ACCESS_TOKEN);
            return {}
        default:
            return state
    }
}

export default user