import {applyMiddleware, combineReducers, createStore} from 'redux'
import categories from "./reducer/categories"
import user from "./reducer/user"
import thunk from "redux-thunk"
import {logout, setUser} from "./action"
import {SecurityService} from "../service/security.service"
import {composeWithDevTools} from 'redux-devtools-extension'
import article from "./reducer/article";

export default function configureStore() {
    const rootReducer = combineReducers({
        user,
        categories,
        article
    })

    const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))

    const store = createStore(rootReducer, composedEnhancers)

    const loadUser = () => (dispatch, getState) => SecurityService.getCurrentUser().then(user => {
        dispatch(setUser(user))
    }, _ => dispatch(logout())).catch(_ => dispatch(logout()))

    store.dispatch(loadUser())

    return store
}