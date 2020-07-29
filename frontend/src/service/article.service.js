import {request} from "./security.service";
import {API_BASE_URL} from "../constant";

export function getArticleById(id) {
    return request({
        url: API_BASE_URL + "/api/article",
        method: 'GET',
    })
}

export function getArticlesRecommended() {
    return request({
        url: API_BASE_URL + "/api/article/recommended",
        method: 'GET',
    })
}

export function saveArticleById(article) {
    return request({
        url: API_BASE_URL + "/api/article",
        method: 'POST',
        body: {article}
    })
}