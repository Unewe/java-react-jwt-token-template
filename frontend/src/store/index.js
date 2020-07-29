import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import categories from "./reducer/categories"
import user from "./reducer/user"
import thunk from "redux-thunk"
import {logout, setUser} from "./action"
import {SecurityService} from "../service/security.service"
import {composeWithDevTools} from 'redux-devtools-extension'

export default function configureStore() {
    const rootReducer = combineReducers({
        user,
        categories
    })

    const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))

    const store = createStore(rootReducer, composedEnhancers)

    const loadUser = () => (dispatch, getState) => SecurityService.getCurrentUser().then(user => {
        dispatch(setUser(user))
    }, _ => logout())

    store.dispatch(loadUser())

    return store
}