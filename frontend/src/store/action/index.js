export const LOGIN = "LOGIN"
export const SET_USER = "SET_USER"
export const LOGOUT = "LOGOUT"
export const LOAD_CATEGORIES = "LOAD_CATEGORIES"

export const login = response => ({
    type: LOGIN,
    payload: response
})

export const setUser = user => ({
    type: SET_USER,
    payload: user
})

export const logout = () => ({
    type: LOGOUT
})

export const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    payload: categories
})